import React from "react";

import Bio from "./Bio";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Bio",
  component: Bio,
};

const Template = () => (
  <Bio
    headShot="https://scontent.fluh1-2.fna.fbcdn.net/v/t1.18169-9/13240587_947158508716118_1927243271518457343_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=1gi_w5lVFT8AX8KsETe&_nc_ht=scontent.fluh1-2.fna&oh=df9e903115f46a5f1bce43e2ecfd2ee4&oe=6167818D"
    name="Manav Kaushal"
    tagLine="2021 is an year to level up!"
    role="Frontend Developer @ Spacejoy"
  />
);

export const Default = Template.bind({});
