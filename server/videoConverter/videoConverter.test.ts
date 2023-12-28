/* eslint-disable @typescript-eslint/unbound-method */
import { VideoConverter } from './videoConverter';
import { type FfmpegCommand } from 'fluent-ffmpeg';
import { vi } from 'vitest';

describe('VideoConverter', () => {
  let videoConverter: VideoConverter;
  let ffmpegMock: FfmpegCommand;

  let endCallback: () => void;
  let errorCallback: (error: Error) => void;

  beforeEach(() => {
    ffmpegMock = {
      input: vi.fn().mockImplementation(() => ffmpegMock),
      inputOptions: vi.fn().mockImplementation(() => ffmpegMock),
      videoFilters: vi.fn().mockImplementation(() => ffmpegMock),
      videoCodec: vi.fn().mockImplementation(() => ffmpegMock),
      addOption: vi.fn().mockImplementation(() => ffmpegMock),
      outputOptions: vi.fn().mockImplementation(() => ffmpegMock),
      output: vi.fn().mockImplementation(() => ffmpegMock),
      on: vi.fn().mockImplementation((event, callback) => {
        if (event === 'end') {
          endCallback = callback;
        } else if (event === 'error') {
          errorCallback = callback;
        }
        return ffmpegMock;
      }),
      run: vi.fn().mockImplementation(() => {
        endCallback();
      }),
    } as unknown as FfmpegCommand;
    videoConverter = new VideoConverter({
      backgroundPath: 'path/to/background',
      ffmpeg: ffmpegMock,
    });
  });

  it('should create an outro video with the given text', async () => {
    const name = 'sample';
    const text = 'Sample text';

    await videoConverter.createOutro({ name, text });

    expect(ffmpegMock.input).toHaveBeenCalledWith('path/to/background');
    expect(ffmpegMock.inputOptions).toHaveBeenCalledWith(['-loop 1', '-t 20']);
    expect(ffmpegMock.videoFilters).toHaveBeenCalledWith([
      {
        filter: 'drawtext',
        options: {
          fontfile: 'fonts/OpenSans.ttf',
          text,
          fontsize: 32,
          fontcolor: '#FF00F2',
          x: '(w-text_w)/2',
          y: '(h-text_h)/2',
          enable: 'between(t,0,4)',
        },
      },
      { filter: 'scale', options: '720:1280' },
    ]);
    expect(ffmpegMock.videoCodec).toHaveBeenCalledWith('libx264');
    expect(ffmpegMock.addOption).toHaveBeenCalledWith('-x264opts', 'keyint=24:min-keyint=24:no-scenecut');
    expect(ffmpegMock.outputOptions).toHaveBeenCalledWith('-b:v', '1000k');
    expect(ffmpegMock.output).toHaveBeenCalledWith('output-outro/sample.mp4');
    expect(ffmpegMock.on).toHaveBeenCalledWith('end', expect.any(Function));
    expect(ffmpegMock.on).toHaveBeenCalledWith('error', expect.any(Function));
    expect(ffmpegMock.run).toHaveBeenCalled();
  });

  it('should reject promise when an error occurs', async () => {
    const name = 'sample';
    const text = 'Sample text';

    ffmpegMock.run = vi.fn().mockImplementation(() => {
      errorCallback(new Error('Test error'));
    });

    await expect(videoConverter.createOutro({ name, text })).rejects.toThrow('Test error');
  });
});
