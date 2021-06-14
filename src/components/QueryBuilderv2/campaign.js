/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Grouped() {
  const options = [
    { title: 'Reach', group: 'Ad Performance' },
    { title: 'Impressions', group: 'Ad Performance' },
    { title: 'Cost per Result', group: 'Ad Performance' },
    { title: 'Daily budget', group: 'Ad Performance' },
    { title: 'Ad Spend', group: 'Ad Performance' },
    { title: "Link Clicks", group: 'Ad Performance' },
    { title: 'CPC (Link Click)', group: 'Ad Performance' },
    { title: 'CTR(Link)', group: 'Ad Performance' },
    { title: 'Click(all)', group: 'Ad Performance' },
    { title: 'CPC(all)', group: 'Ad Performance' },
    { title: 'CTR(all)', group: 'Ad Performance' },
    { title: 'Frequency', group: 'Ad Performance' },
    { title: 'CPM(cost per 1000 impressions)', group: 'Ad Performance' },
    { title: 'Purchase ROAS', group: 'Ad Performance' },
    { title: 'Cost per lead', group: 'Ad Performance' },
    { title: 'Total lead', group: 'Ad Performance' },
    { title: 'Lead convesion value', group: 'Ad Performance' },
    { title: 'Total Purchase', group: 'Ad Performance' },
    { title: 'Cost per Purchase', group: 'Ad Performance' },
    { title: 'Purchase Value', group: 'Ad Performance' },
    { title: 'Post Reactions', group: 'Ad Engagement' },
    { title: 'Post Comments', group: 'Ad Engagement' },
    { title: 'Post Saves', group: 'Ad Engagement' },
    { title: 'Thruplay', group: 'Video Ad Engagement' },
    { title: 'Cost Per Tharuplay', group: 'Video Ad Engagement' },
    { title: '2 Second plays', group: 'Video Ad Engagement' },
    { title: 'Cost Per 2 Second plays', group: 'Video Ad Engagement' },
    { title: '3 Second plays', group: 'Video Ad Engagement' },
    { title: 'Cost Per 3 Second plays', group: 'Video Ad Engagement' },
    { title: '10 Second Play', group: 'Video Ad Engagement' },
    { title: 'Cost Per 10 Second plays', group: 'Video Ad Engagement' },
    { title: 'Video Plays at 25%', group: 'Video Ad Engagement' },
    { title: 'Video Plays at 50%', group: 'Video Ad Engagement' },
    { title: 'Video Plays at 75%', group: 'Video Ad Engagement' },
    { title: 'Video Plays at 95%', group: 'Video Ad Engagement' },
    { title: 'Video Plays at 100%', group: 'Video Ad Engagement' },

  ];

  const grouping = [
    { group: "Ad Performance" },
    { group: "Ad Performance" },
    { group: "Ad Performance" }
  ]


  return (
    <Autocomplete
      id="grouped-demo"
      disableClearable={true}
      options={options}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      autoHighlight={"true"}
      renderInput={(params) => <TextField {...params} label="Campaign Ad Spend" variant="outlined" />}
    />
  );
}
