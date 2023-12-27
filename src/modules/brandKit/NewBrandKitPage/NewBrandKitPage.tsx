import Typography from '@shared/ui-kit/components/Typography';
import Stack from '@shared/ui-kit/components/Stack';
import TextField from '@shared/ui-kit/components/TextField';
import MenuItem from '@shared/ui-kit/components/MenuItem';
import Tabs from '@shared/ui-kit/components/Tabs';
import Tab from '@shared/ui-kit/components/Tab';
import Tooltip from '@shared/ui-kit/components/Tooltip';
import IconButton from '@shared/ui-kit/components/IconButton';
import Divider from '@shared/ui-kit/components/Divider';
import Button from '@shared/ui-kit/components/Button';
import Grid from '@shared/ui-kit/components/Grid';
import InfoIcon from '@shared/ui-kit/icons/InfoIcon';
import { styled } from '@shared/ui-kit/styles';

import Page from '@components/Page';

const Body = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(5.5),
  paddingBottom: theme.spacing(1),
}));

const predefinedCallToActions = [{
  id: '1',
  name: 'Listen on Spotify',
}, {
  id: '2',
  name: 'Listen on Apple',
}, {
  id: '3',
  name: 'Listen on Google',
}];

const NewBrandKitPage: React.FC = () => {
  return (
    <Page>
      <Stack spacing={3} component="form">
        <Stack spacing={4.5} direction="row" alignItems="center">
          <Typography variant="h4">
            Brand kit name
          </Typography>

          <TextField placeholder="Name" />
        </Stack>

        <Body spacing={2} direction="row">
          <Tabs orientation="vertical" value={2}>
            <Tab label="Texts" />
            <Tab label="Logo" />
            <Tab label="Outro" />
            <Tab label="Custom brand kit" />
          </Tabs>

          <Stack spacing={4.5}>
            <Stack spacing={0.5} direction="row">
              <Typography variant="h5">
                Outro
              </Typography>

              <Tooltip title="We will show the call to action at the end of the clip">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Stack>

            <Grid container spacing={6}>
              <Grid xs={6}>
                <Typography>
                  Call to action
                </Typography>
              </Grid>
              <Grid xs={6}>
                <TextField select placeholder="Select">
                  {predefinedCallToActions.map((callToAction) => (
                    <MenuItem key={callToAction.id} value={callToAction.name}>
                      {callToAction.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid xs={6}>
                <Typography>
                  Custom call to action
                </Typography>
              </Grid>
              <Grid xs={6}>
                <TextField
                  placeholder="The Most Amazing Podcast Ever!"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>
          </Stack>
        </Body>

        <Divider />

        <Button type="submit">Save</Button>
      </Stack>
    </Page>
  );
};

export default NewBrandKitPage;
