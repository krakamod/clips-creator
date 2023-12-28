import ffmpegStatic from 'ffmpeg-static';
import ffmpeg, { type FfmpegCommand } from 'fluent-ffmpeg';
import fs from 'fs';
import path from 'path';

import { type IBrandKit } from '../modules/brandKit/IBrandKit';

ffmpeg.setFfmpegPath(ffmpegStatic as string);

export class VideoConverter {
  private readonly ffmpeg: FfmpegCommand;
  private readonly backgroundPath: string;
  private readonly directory: string = 'output-outro';
  private readonly videoCodec: string = 'libx264';
  private readonly x264Options: string = 'keyint=24:min-keyint=24:no-scenecut';
  private readonly videoBitrates: string[] = ['1000k', '2000k', '4000k'];
  private readonly duration: number = 20;

  private createOutroDir (): void {
    const dir = path.join(__dirname, '..', this.directory);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  };

  public constructor ({
    backgroundPath,
    ffmpeg,
  }: {
    backgroundPath: string;
    ffmpeg: FfmpegCommand;
  }) {
    this.createOutroDir();
    this.backgroundPath = backgroundPath;
    this.ffmpeg = ffmpeg
      .input(this.backgroundPath)
      .inputOptions([
        '-loop 1',
        `-t ${this.duration}`,
      ])
      .size('720x1280')
      .autopad(true, 'black')
      .videoCodec(this.videoCodec)
      .addOption('-x264opts', this.x264Options)
      .outputOptions('-b:v', this.videoBitrates[0]);
  }

  private getScaleOptions (text: string): ffmpeg.AudioVideoFilter[] {
    return [
      {
        filter: 'drawtext',
        options: {
          fontfile: path.join(__dirname, '..', 'fonts', 'OpenSans.ttf'),
          text,
          fontsize: 32,
          fontcolor: '#FF00F2',
          x: '(w-text_w)/2',
          y: '(h-text_h)/2',
          enable: 'between(t,0,4)',
        },
      },
    ];
  }

  public async createOutro ({
    name,
    text,
  }: IBrandKit): Promise<void> {
    await new Promise((resolve, reject) => {
      this.ffmpeg.clone()
        .videoFilters(this.getScaleOptions(text))
        .output(path.join(__dirname, '..', this.directory, `${name}.mp4`))
        .on('end', () => {
          // eslint-disable-next-line no-console
          console.log('Video creation finished!');
          resolve(undefined);
        })
        .on('error', (err) => {
          // eslint-disable-next-line no-console
          console.log('An error occurred: ' + err.message);
          reject(err);
        })
        .run();
    });
  }
}

export default new VideoConverter({
  backgroundPath: path.join(__dirname, 'black.webp'),
  ffmpeg: ffmpeg(),
});
