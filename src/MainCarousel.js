import React from "react";
import ReactDOM from "react-dom";
import brotherhood from "./homepage_imgs/everyone_rocket_uspcaled.jpg";
import professionalism from "./homepage_imgs/everyone_professional_peter.jpg";
import volunteering from "./homepage_imgs/everyone_cleanup_peter_adli_landon.png";
import { useTransition, animated } from "react-spring";

class MainCarousel extends React.Component {
  CarouselContent = {
    0: {
      image: volunteering,
      slogan: "Volunteering",
    },
    1: {
      image: professionalism,
      slogan: "Professionalism",
    },
    2: {
      image: brotherhood,
      slogan: "Brotherhood",
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      current_showing: 0,
    };
    this.current_showing = 0;
  }

  gear_types = {
    "big-gear": (style) => {
      return "hi";
    },
  };
  getGears = () => {
    console.log("Getting gears...");
    var gears = [];
    for (var i = 0; i < this.gear_styles.length; i++) {
      gears = gears.concat(this.get_gear_type(i));
    }
    return gears;
  };

  gear_styles = [
    ["gear-svg spin-cw gear-bottom gear-left", 1],
    ["gear-svg spin-cw gear-bottom gear-right", 1],
    ["gear-svg spin-cw gear-top gear-left", 1],
    ["gear-svg spin-cw gear-top gear-right", 1],
    ["gear-svg spin-ccw gear-middle-ver gear-right", 1],
    ["gear-svg spin-ccw gear-middle-ver gear-left", 1],
    ["gear-svg spin-ccw ", 2, { left: "20%", width: "10vw", bottom: "15%" }],
    ["gear-svg spin-ccw ", 2, { left: "20%", width: "10vw", top: "15%" }],
    ["gear-svg spin-ccw ", 2, { right: "20%", width: "10vw", bottom: "15%" }],
    ["gear-svg spin-ccw ", 2, { right: "20%", width: "10vw", bottom: "15%" }],
    ["gear-svg spin-ccw ", 2, { right: "20%", width: "10vw", top: "15%" }],
  ];

  get_gear_type(style_index, gear_object) {
    var classname = this.gear_styles[style_index][0];
    var gear_type_ind = this.gear_styles[style_index][1];
    var style = this.gear_styles[style_index][2];
    return this.get_gear_object(classname, gear_type_ind, style);
  }

  get_gear_object(classname, gear_ind, style) {
    switch (gear_ind) {
      case 1:
        return (
          <svg
            className={classname}
            style={style}
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
          >
            {" "}
            <g>
              {" "}
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                {" "}
                <path d="M4798.6,5003.1c-57.5-166.8-86.3-362.5-86.3-575.3V4190l-195.6-24.9c-109.3-13.4-218.6-28.8-245.5-34.5c-47.9-9.6-51.8-3.8-103.6,209c-67.1,260.8-209,552.3-270.4,552.3c-46,0-303-65.2-333.7-84.4c-13.4-9.6-21.1-80.6-21.1-187.9c0-134.2,13.4-226.3,59.5-395.1c32.6-118.9,53.7-230.1,49.9-243.6c-5.8-13.4-34.5-30.7-65.2-36.4c-28.8-7.7-124.7-47.9-211-88.2l-159.2-74.8l-78.6,138.1c-141.9,247.4-186,308.8-304.9,425.8l-117,115.1l-143.8-76.7c-80.5-42.2-157.3-92.1-170.7-111.2c-38.4-53.7,63.3-343.3,203.3-577.3l113.1-193.7l-51.8-38.4c-26.9-21.1-115.1-88.2-193.7-149.6l-141.9-113.2l-174.5,170.7c-97.8,94-243.6,212.9-327.9,262.7l-149.6,94L1534.5,3582l-145.7-143.8l94-149.6c49.9-84.4,168.8-230.1,262.7-327.9l170.7-174.5L1803,2644.2c-61.4-78.6-128.5-166.8-149.6-193.7l-38.4-51.8l-201.4,117c-109.3,63.3-278.1,141.9-374,172.6L867.1,2744l-40.3-49.9c-21.1-26.8-69-103.6-105.5-170.7l-65.2-122.7l124.7-126.6c84.4-86.3,193.7-166.9,339.5-251.2l212.9-124.7l-72.9-157.3c-40.3-86.3-80.6-182.2-88.2-211c-5.7-30.7-23-59.5-36.4-65.2c-15.3-3.8-124.7,17.3-247.4,49.9c-234,63.3-550.4,84.4-579.2,38.4c-19.2-30.7-84.4-287.7-84.4-333.7c0-57.5,304.9-207.1,561.9-272.3c201.4-51.8,207.1-55.6,199.5-101.6c-5.8-26.8-21.1-136.2-34.5-241.6l-23-195.6l-280-9.6c-182.2-5.8-326-21.1-414.2-44.1L100,317.9V116.6V-84.8L263-127c122.7-30.7,224.4-40.3,414.2-42.2l251.2-1.9l21.1-187.9c11.5-101.6,26.9-212.9,34.5-245.5l11.5-57.5l-209-55.6c-113.1-30.7-287.7-94-385.5-141.9c-145.8-72.9-176.4-94-176.4-130.4c0-46,65.2-297.3,86.3-331.8c5.8-11.5,90.1-19.2,186-19.2c136.2,0,228.2,13.4,402.7,59.5c130.4,34.5,234,53.7,243.6,44.1c7.7-9.6,34.5-69.1,59.5-132.3s65.2-155.3,90.1-205.2l44.1-92.1l-195.6-109.3c-128.5-72.9-245.5-159.2-341.4-249.3l-143.8-138.1l51.8-101.7c97.8-184.1,128.5-226.3,170.7-226.3c97.8,0,366.3,103.6,544.7,211l191.8,113.2l38.4-49.9c21.1-28.8,88.2-115.1,151.5-193.7l111.2-141.9l-163-166.9c-132.3-134.2-358.6-444.9-358.6-492.9c0-17.3,216.7-239.7,255.1-258.9c53.7-28.8,299.2,134.2,506.3,333.7l174.5,170.7l103.6-84.4c55.6-46,141.9-111.2,191.8-147.7c49.9-36.4,88.2-70.9,84.4-76.7c-3.8-5.8-55.6-95.9-115.1-199.4c-120.8-203.3-234-523.6-201.4-561.9c30.7-36.4,287.7-180.3,322.2-180.3c63.3,1.9,258.9,247.4,421.9,531.2l78.6,136.2l186-82.5c103.6-44.1,205.2-88.2,228.2-97.8c40.3-17.3,40.3-17.3-23-237.8c-49.9-178.3-63.3-257-63.3-406.6c-1.9-109.3,5.8-189.8,17.3-197.5c40.3-24.9,343.3-99.7,360.5-88.2c49.9,32.6,193.7,356.7,245.5,554.2c53.7,211,57.5,216.7,103.6,207.1c26.9-5.8,136.2-21.1,245.5-32.6l195.6-24.9v-239.7c1.9-184.1,11.5-283.8,44.1-414.2l42.2-172.6H5000h201.4l42.2,172.6c30.7,128.5,42.2,234,42.2,414.2l1.9,241.7l187.9,21.1c101.6,11.5,212.9,26.9,243.6,34.5l59.4,11.5l51.8-209.1c69-268.5,212.9-561.9,278.1-561.9c44.1,0,295.3,65.2,329.9,86.3c11.5,5.8,19.2,90.1,19.2,186c0,134.2-13.4,226.3-59.5,395.1c-32.6,118.9-53.7,228.2-49.9,239.7c3.8,13.4,42.2,34.5,82.5,49.9c42.2,13.4,138.1,53.7,212.9,90.1l140,63.3l126.6-214.8c117-199.5,329.9-454.5,381.7-454.5c11.5,0,86.3,38.4,168.8,86.3c115.1,67.1,147.7,95.9,147.7,130.4c0,92.1-95.9,343.3-199.5,521.7c-61.4,103.6-111.2,195.6-113.1,201.4c-1.9,7.7,82.5,80.6,186,161.1l189.9,149.6l164.9-161.1c153.4-149.6,289.6-251.2,435.3-327.9l59.5-30.7l140,141.9l140,140l-94,151.5c-49.9,82.5-168.8,228.2-262.7,326L8083.8-2553l113.2,141.9c61.4,78.6,128.5,166.9,149.6,193.7l38.4,51.8l201.4-117c191.8-111.2,439.2-209,533.2-209c44.1,0,72.9,36.4,170.7,224.4l53.7,99.7l-115.1,117c-117,118.9-178.4,163-425.8,304.9l-138.1,78.6l57.5,126.6c30.7,69,74.8,170.7,95.9,226.3l36.4,101.6l235.9-63.3c184.1-51.8,270.4-65.2,410.4-65.2c97.8,0,182.2,7.7,187.9,19.2c21.1,34.5,86.3,285.8,86.3,329.9c0,67.1-280,207.1-550.4,276.2c-118.9,30.7-216.7,63.3-216.7,74.8c0,11.5,7.7,69.1,17.3,126.6c11.5,57.5,24.9,157.2,30.7,220.5l13.4,118.9l280,9.6c184.1,5.8,327.9,21.1,416.2,44.1L9900-84.8v201.4v201.4l-163,42.2c-122.7,30.7-224.4,40.3-414.2,42.2l-251.2,1.9l-21.1,178.3c-13.4,95.9-28.8,207.1-34.5,243.6l-11.5,69l209.1,51.8c268.5,69,561.9,212.9,561.9,278.1c0,44.1-65.2,295.4-86.3,329.9c-5.8,11.5-90.1,19.2-186,19.2c-134.2,0-226.3-13.4-393.1-59.5c-120.8-30.7-228.2-55.6-239.7-51.8c-17.3,5.7-187.9,400.8-187.9,435.3c0,9.6,94,71,209.1,136.2c140,80.5,247.4,159.2,329.8,241.6l122.8,124.7l-65.2,122.7c-36.4,67.1-84.4,143.8-105.5,170.7l-40.3,49.9l-176.4-55.6c-153.4-49.9-270.4-107.4-515.9-253.2l-59.5-36.4l-65.2,92.1c-34.5,49.9-101.7,136.2-147.7,193.7l-84.4,101.7l163,166.8c88.2,90.1,207.1,235.9,262.7,322.2l99.7,159.2l-38.3,53.7c-44.1,59.5-224.4,234-245.5,234c-47.9,0-335.6-209-481.4-351l-174.5-170.7l-103.6,84.4c-55.6,46-141.9,111.2-191.8,147.7c-71,49.9-86.3,71-74.8,95.9c9.6,17.3,63.3,109.3,117,203.3c55.6,95.9,124.7,251.2,155.3,345.2l55.6,172.6l-49.9,40.3c-26.9,21.1-103.6,69-170.7,105.5l-122.8,65.2l-126.6-124.7c-69-69-145.8-159.2-170.7-201.4c-24.9-42.2-80.5-140-124.6-214.8l-80.5-140l-90.1,46c-49.9,23-151.5,67.1-226.3,95.9l-136.2,53.7l65.2,232.1c49.9,186,63.3,270.4,63.3,410.4c0,149.6-5.8,180.3-32.6,193.7c-63.3,32.6-306.8,86.3-337.5,74.8c-53.7-21.1-186-304.9-249.3-537c-59.5-220.5-61.4-226.3-109.3-216.7c-26.9,5.8-136.2,19.2-241.6,32.6l-195.6,23l-9.6,280c-5.8,184.1-21.1,326-44.1,414.3l-36.4,134.2l-197.5,5.8C4858.1,5026.1,4806.3,5020.4,4798.6,5003.1z M5345.2,3520.7c362.5-28.8,769-145.8,1141.1-326c239.7-117,563.8-316.4,629-389.3c28.8-32.6-13.4-78.6-723-788.2l-753.7-753.7l-122.7,47.9c-209,82.5-287.7,97.8-515.9,97.8c-228.2,0-306.9-15.3-515.9-97.8l-122.7-47.9l-753.7,753.7c-866.8,866.8-803.6,749.9-515.9,941.6c485.2,326,1079.7,529.3,1658.9,571.5C4965.5,3543.7,5053.7,3543.7,5345.2,3520.7z M3805.2,630.5c-143.8-341.4-143.8-715.3-1.9-1033.7l51.8-117l-755.6-755.6c-416.2-416.2-759.5-755.6-765.2-755.6c-5.8,0-53.7,63.3-109.3,140c-567.7,794-771,1741.4-579.2,2696.4c94,471.8,354.8,1045.2,627.1,1378.9l67.1,84.4l757.5-757.5l757.5-757.5L3805.2,630.5z M7861.4,1996c130.4-195.6,326-604.1,397-826.6c270.4-859.2,199.4-1791.2-195.6-2579.4c-90.1-178.3-260.8-454.5-368.2-592.6c-28.8-36.4-63.3-3.8-788.2,719.2c-500.6,500.6-753.7,767.1-747.9,786.3c5.8,15.3,38.4,107.4,72.9,201.4c55.6,157.3,61.4,193.7,61.4,402.7c0,237.8-13.4,312.6-97.8,525.5l-47.9,122.7l753.7,755.6l755.6,755.6l53.7-63.3C7740.6,2168.6,7807.7,2074.6,7861.4,1996z M5517.8,107v-527.4l-521.7,3.8l-523.6,5.8l-5.7,523.6l-3.8,521.7h527.4h527.4V107z M4487.9-1082.1c303-140,688.5-138.1,1026,3.8l122.8,49.9l755.6-755.6c416.2-416.2,755.6-759.5,755.6-765.2s-74.8-63.3-168.8-130.4c-207.1-147.7-680.8-385.5-924.4-462.2c-999.2-320.3-2088.5-170.7-2941.9,402.7c-105.5,71-211,143.8-232.1,161.1c-36.4,28.8-7.7,59.5,719.2,786.3c416.2,416.2,763.3,757.5,769,757.5C4376.7-1034.1,4428.5-1055.2,4487.9-1082.1z" />{" "}
              </g>{" "}
            </g>{" "}
          </svg>
        );
        break;
      case 2:
        return (
          <svg
            className={classname}
            style={style}
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            enable-background="new 0 0 1000 1000"
          >
            {" "}
            <g>
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)">
                <path d="M4624.9,4974.8c-49.8-42.1-55.5-72.7-141.6-587.5l-89.9-541.5l-206.7-45.9c-112.9-26.8-279.4-70.8-367.4-99.5l-160.7-51.7l-325.3,396.1c-338.7,415.2-398,476.5-463.1,476.5c-45.9,0-533.9-271.7-589.4-327.2c-23-23-36.4-63.1-36.4-103.3c0-38.3,78.5-275.6,183.7-553l181.8-486.1l-271.7-271.7l-271.7-271.7l-512.9,193.3c-493.7,185.6-516.7,193.3-576,168.4c-51.7-23-89.9-74.6-220.1-302.4c-88-153.1-158.8-292.8-158.8-313.8c1.9-74.6,51.7-124.4,461.2-457.4l415.2-338.7l-36.4-91.8c-36.4-97.6-118.6-411.4-145.4-556.9l-17.2-86.1l-543.5-90C43.8,519.9,101.2,565.8,101.2,120c0-447.8-55.5-401.9,631.5-516.7l541.5-89.9l47.8-208.6c24.9-114.8,68.9-279.4,99.5-365.5l51.7-156.9l-417.2-340.6c-394.2-323.4-457.3-386.5-457.3-459.3c0-47.8,306.2-577.9,346.4-599c70.8-38.3,164.6-15.3,637.2,164.6l484.1,183.7l271.7-273.7l271.7-271.7l-193.3-512.8c-241.1-639.2-250.7-576,135.9-796.1c153.1-88,294.7-158.8,315.7-158.8c67,0,126.3,61.2,466.9,476.5l325.3,396.1l160.7-51.7c88-28.7,252.6-72.7,367.4-99.5l208.6-45.9l88-541.6c111-687,67-631.5,514.8-631.5c447.8,0,401.9-55.5,512.9,629.6l90,543.5l210.5,45.9c116.7,26.8,281.3,70.8,367.4,101.4l156.9,51.7l340.6-417.2c323.4-394.2,386.6-457.4,459.3-457.4c40.2,0,532,277.5,581.7,327.2c63.2,63.2,42.1,155-147.3,656.4l-181.8,484.1l271.7,271.7l271.7,273.7l442.1-168.4c243-91.8,476.5-178,520.5-191.3c135.9-40.2,168.4-13.4,348.3,300.4c86.1,153.1,156.9,294.7,156.9,315.7c0,67-61.2,126.3-476.5,466.9l-398,327.2l51.7,156.9c30.6,86.1,74.6,250.7,99.5,367.4l47.8,210.5l543.4,89.9c687,112.9,629.6,67,629.6,512.8c0,449.7,55.5,403.8-631.5,516.7l-541.5,88l-47.8,210.5c-24.9,114.8-68.9,279.4-99.5,365.5l-51.7,156.9l398,327.2c415.3,340.6,476.5,399.9,476.5,465c0,45.9-271.7,533.9-327.2,589.4c-21.1,21-63.2,36.4-103.3,36.4c-38.3,0-275.6-78.5-551.1-183.7l-486.1-183.7l-271.7,273.7l-273.6,271.7l183.7,486.1c105.2,275.6,183.7,512.8,183.7,551.1c0,40.2-15.3,82.3-36.4,103.3c-49.7,49.8-541.6,327.2-581.7,327.2c-72.7,0-135.9-63.1-457.4-457.3l-340.6-415.3l-156.9,51.7c-88,28.7-252.6,72.7-369.3,99.5l-210.5,45.9l-90,543.5c-114.8,687-67,629.6-512.9,629.6C4690,5018.8,4674.7,5016.9,4624.9,4974.8z M5134,3105.2c36.3-9.6,99.5-45.9,139.7-78.5c241.1-199,193.3-585.6-88-717.6c-377-174.1-754,218.2-566.4,589.4C4707.2,3072.6,4929.2,3162.6,5134,3105.2z M5208.6,1861.3c746.3-93.8,1349.1-646.8,1507.9-1387.4c38.3-176.1,38.3-535.8,0-708C6567.3-919.1,6039.1-1447.3,5354-1596.6c-179.9-40.2-553-40.2-721.4,1.9C3874.8-1414.8,3346.6-825.4,3256.7-61.8c-15.3,134-15.3,229.6,0,363.6c95.7,805.6,683.2,1423.7,1475.4,1550C4938.8,1884.3,5011.5,1884.3,5208.6,1861.3z M2539.1,533.3c128.2-38.3,218.1-116.7,271.7-229.6c59.3-126.3,59.3-241.1,0-369.3c-132-281.3-518.6-329.1-717.6-88c-202.8,244.9-74.6,620,237.3,696.6C2418.5,563.9,2441.5,562,2539.1,533.3z M7776.6,500.8c294.7-149.3,302.4-585.6,11.5-752c-176.1-99.5-373.2-72.7-516.7,70.8C6925.1,165.9,7338.4,724.7,7776.6,500.8z M5141.6-2046.2c191.4-57.4,327.2-298.5,279.4-495.6c-120.6-499.4-847.7-422.9-847.7,88C4573.3-2153.4,4845-1958.2,5141.6-2046.2z" />
                <path d="M4703.4,1522.6c-558.8-118.6-993.2-556.8-1108-1119.5c-204.8-997,690.8-1892.6,1687.8-1687.8c998.9,204.7,1475.4,1364.4,907.1,2202.6C5861.1,1402.1,5267.9,1643.2,4703.4,1522.6z M5317.7,799.3c145.4-70.8,302.3-227.7,367.4-367.4c44-97.6,51.7-133.9,51.7-311.9S5731-92.5,5685.1-192c-67-141.6-231.5-306.2-373.2-373.2c-99.5-45.9-133.9-51.7-311.9-51.7c-176.1,0-214.3,5.7-306.2,49.8c-156.9,72.7-294.7,208.6-367.4,357.8c-59.3,118.7-63.1,139.7-63.1,329.2c0,179.9,5.7,212.4,51.7,306.2c97.6,199,239.2,329.1,438.2,401.9C4912,887.3,5164.6,873.9,5317.7,799.3z" />
              </g>
            </g>
          </svg>
        );
        break;
    }
  }

  render() {
    var gears = this.getGears();

    // set a timer for 3 seconds to change properties of carousel-container
    this.timeout = setTimeout(() => {
      console.log(" this.current_showing is ");
      console.log(this.current_showing);
      console.log(this.CarouselContent[this.current_showing]);
      console.log(this.CarouselContent[this.current_showing].image);
      var next_showing = (this.current_showing + 1) % 3;

      var carouselContainer = document.getElementById("carousel-container");

      carouselContainer.style.backgroundImage = `url(${this.CarouselContent[next_showing].image})`;
      var carouselSlogan = document.getElementById("CarouselSlogan");
      carouselSlogan.innerHTML = `${this.CarouselContent[next_showing].slogan}`;
      this.current_showing = next_showing;
    }, 3000);

    return (
      <div
        id="carousel-container"
        style={{
          backgroundImage: `url(${
            this.CarouselContent[this.current_showing].image
          })`,
        }}
      >
        <div id="page-title" className="centered fade-in-bottom">
          <div className="theta-tau-title">
            <div className="theta-title"> Θ </div>
            <div className="tau-title">Τ</div>
          </div>

          <div id="chapter-title" className="hor-flex">
            <div className="chapter-letters">ΨΕ </div>
            <div>Chapter</div>
          </div>
          <div id="CarouselSlogan" className="carousel-slogan">
            {this.CarouselContent[this.current_showing].slogan}
          </div>

          <div className="centered icon"></div>
        </div>
        {gears}
      </div>
    );
  }
}

export default MainCarousel;
