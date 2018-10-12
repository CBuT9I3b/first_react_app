import React from 'react';
import "@material/linear-progress/dist/mdc.linear-progress.css";

const Progress = () => (
  <div role="progressbar" class="mdc-linear-progress mdc-linear-progress--indeterminate">
    <div class="mdc-linear-progress__buffering-dots"></div>
    <div class="mdc-linear-progress__buffer"></div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
      <span class="mdc-linear-progress__bar-inner"></span>
    </div>
  </div>
);

export default Progress;
