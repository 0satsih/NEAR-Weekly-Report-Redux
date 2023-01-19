import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as compute_rest_props, g as getContext, h as spread, i as escape_object, j as escape_attribute_value, s as setContext } from "../../chunks/index.js";
import "chart.js/auto";
import classNames from "classnames";
import { w as writable } from "../../chunks/index3.js";
const app = "";
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"https://github.com/jordanSatsih/NEAR-Weekly-Report-Redux"}" class="${"flex items-center space-x-2 hover:text-sky-400 transition"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"currentColor"}" class="${"w-5"}" viewBox="${"0 0 16 16"}"><path d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}"></path></svg>
	<span>Link to Github Repo</span></a>`;
});
const Metricsdao = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"https://metricsdao.xyz/"}" class="${"flex flex-wrap justify-center items-center space-x-2 hover:text-sky-400 transition"}"><img src="${"metricsdao.png"}" alt="${"MetricsDAO Logo"}"${add_attribute("width", 50, 0)}${add_attribute("height", 50, 0)}>
	<span class="${"font-bold"}">MetricsDAO</span></a>`;
});
const Flipside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a href="${"https://flipsidecrypto.xyz/"}" class="${"flex flex-wrap justify-center items-center space-x-2 hover:text-sky-400 transition"}"><span class="${"font-bold"}">Powered by</span>
	<img src="${"flipside_logo.png"}" alt="${"Flipside Logo"}"${add_attribute("width", 150, 0)}${add_attribute("height", 50, 0)}></a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"h-60 w-full flex justify-center"}"><div class="${"w-6/12 my-4 border-2 border-gray-300 rounded-xl bg-white"}"><div class="${"grid grid-cols-4 grid-rows-2 gap-y-1 divide-y"}"><div class="${"col-start-2 row-start-1 col-span-2"}"><div class="${"grid grid-cols-1 grid-rows-2 gap-3"}"><div class="${"row-start-1 flex place-content-center mt-3"}"><span class="${"font-mono text-lg"}">Developed by
							<a href="${"https://twitter.com/_satsih"}" class="${"font-semibold hover:text-sky-400 transition"}">satsih
							</a></span></div>
					<div class="${"row-start-2 flex place-content-center space-x-3"}">${validate_component(Github, "Github").$$render($$result, {}, {}, {})}</div></div></div>
			<div class="${"col-start-2 row-start-2 flex justify-center"}">${validate_component(Metricsdao, "Metricsdao").$$render($$result, {}, {}, {})}</div>
			<div class="${"col-start-3 row-start-2 flex justify-center"}">${validate_component(Flipside, "Flipside").$$render($$result, {}, {}, {})}</div></div></div></div>`;
});
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-start items-center mx-4 space-x-4"}">${slots.logo ? slots.logo({}) : `
		<span>Logo</span>
	`}
	${slots.title ? slots.title({}) : `
		<span>Title</span>
	`}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"top-0 h-20 w-full border-b-2 border-gray-300 bg-white flex items-center"}"><div class="${"container mx-auto flex justify-start items-center"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {
    title: () => {
      return `<h1 slot="${"title"}" class="${"text-3xl font-bold"}">Weekly Report Redux</h1>`;
    },
    logo: () => {
      return `<svg slot="${"logo"}" id="${"Layer_1"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 342 90"}" class="${"h-[20px]"}"><path d="${"M171.21,18.75v52.5a.76.76,0,0,1-.75.75H165a7.49,7.49,0,0,1-6.3-3.43l-24.78-38.3.85,19.13V71.25A.76.76,0,0,1,134,72h-7.22a.76.76,0,0,1-.75-.75V18.75a.76.76,0,0,1,.75-.75h5.43a7.52,7.52,0,0,1,6.3,3.42l24.78,38.24-.77-19.06V18.75a.75.75,0,0,1,.75-.75h7.22A.76.76,0,0,1,171.21,18.75Z"}"></path><path d="${"M245,72h-7.64a.75.75,0,0,1-.7-1L256.9,18.72A1.14,1.14,0,0,1,258,18h9.57a1.14,1.14,0,0,1,1.05.72L288.8,71a.75.75,0,0,1-.7,1h-7.64a.76.76,0,0,1-.71-.48l-16.31-43a.75.75,0,0,0-1.41,0l-16.31,43A.76.76,0,0,1,245,72Z"}"></path><path d="${"M341.84,70.79,326.66,51.4c8.57-1.62,13.58-7.4,13.58-16.27,0-10.19-6.63-17.13-18.36-17.13H300.71a1.12,1.12,0,0,0-1.12,1.13h0a7.2,7.2,0,0,0,7.2,7.2H321c7.09,0,10.49,3.63,10.49,8.87s-3.32,8.95-10.49,8.95H300.71a1.13,1.13,0,0,0-1.12,1.13v26a.75.75,0,0,0,.75.75h7.22a.76.76,0,0,0,.75-.75V51.87h8.33l13.17,17.19a7.51,7.51,0,0,0,6,2.94h5.48A.75.75,0,0,0,341.84,70.79Z"}"></path><path d="${"M222.17,18h-33.5a1,1,0,0,0-1,1h0A7.33,7.33,0,0,0,195,26.33h27.17a.74.74,0,0,0,.75-.75V18.75A.75.75,0,0,0,222.17,18Zm0,45.67h-25a.76.76,0,0,1-.75-.75V49.38a.75.75,0,0,1,.75-.75h23.11a.75.75,0,0,0,.75-.75V41a.75.75,0,0,0-.75-.75H188.79a1.13,1.13,0,0,0-1.12,1.13V70.88A1.12,1.12,0,0,0,188.79,72h33.38a.75.75,0,0,0,.75-.75V64.42A.74.74,0,0,0,222.17,63.67Z"}"></path><path d="${"M72.24,4.57,53.42,32.5a2,2,0,0,0,3,2.63L74.91,19.08a.74.74,0,0,1,1.24.56V69.93a.75.75,0,0,1-1.32.48l-56-67A9.59,9.59,0,0,0,11.54,0H9.59A9.59,9.59,0,0,0,0,9.59V80.41A9.59,9.59,0,0,0,9.59,90h0a9.59,9.59,0,0,0,8.17-4.57L36.58,57.5a2,2,0,0,0-3-2.63L15.09,70.92a.74.74,0,0,1-1.24-.56V20.07a.75.75,0,0,1,1.32-.48l56,67A9.59,9.59,0,0,0,78.46,90h2A9.59,9.59,0,0,0,90,80.41V9.59A9.59,9.59,0,0,0,80.41,0h0A9.59,9.59,0,0,0,72.24,4.57Z"}"></path></svg>`;
    }
  })}</div></div>`;
});
const Query = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<button class="${"border-2 border-gray-300 rounded-full p-0.5 hover:bg-gray-200 transition"}"><a${add_attribute("href", link, 0)} target="${"_blank"}" rel="${"noreferrer"}" class="${"flex items-center mx-1 space-x-0.5"}"><svg class="${"w-6 h-5"}" fill="${"none"}" stroke="${"currentColor"}" viewBox="${"0 0 24 24"}" xmlns="${"http://www.w3.org/2000/svg"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"}"></path></svg>
		<span class="${"font-mono font-bold"}">Query</span></a></button>`;
});
const ChartHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { query_link } = $$props;
  let { title } = $$props;
  if ($$props.query_link === void 0 && $$bindings.query_link && query_link !== void 0)
    $$bindings.query_link(query_link);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"grid grid-cols-9 grid-rows-1 mt-1 py-0.5"}"><h2 class="${"col-start-3 col-span-5 justify-self-center font-sans text-lg font-bold "}">${escape(title)}</h2>
    <div class="${"col-start-9 col-span-1 flex justify-end space-x-2 mr-2"}">${validate_component(Query, "Query").$$render($$result, { link: query_link }, {}, {})}</div></div>`;
});
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className } = $$props;
  let { title } = $$props;
  let { query_link } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.query_link === void 0 && $$bindings.query_link && query_link !== void 0)
    $$bindings.query_link(query_link);
  return `<div${add_attribute("class", className, 0)}><div class="${"border-2 border-gray-300 rounded-md p-2 bg-white"}">${validate_component(ChartHeader, "ChartHeader").$$render($$result, { title, query_link }, {}, {})}
		<div class="${"relative flex-auto"}">${slots.figure ? slots.figure({}) : `<span>Figure</span>`}</div></div></div>`;
});
const DailyNewUsers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyActiveContracts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { ydata2 } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.ydata2 === void 0 && $$bindings.ydata2 && ydata2 !== void 0)
    $$bindings.ydata2(ydata2);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyActiveUsers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyNewContracts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyGas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyTransactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyTransactionFeesTotal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata } = $$props;
  let { ydata2 } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata === void 0 && $$bindings.ydata && ydata !== void 0)
    $$bindings.ydata(ydata);
  if ($$props.ydata2 === void 0 && $$bindings.ydata2 && ydata2 !== void 0)
    $$bindings.ydata2(ydata2);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
const DailyTransactionFeesAvg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { ydata3 } = $$props;
  let { ydata4 } = $$props;
  let { xdata } = $$props;
  let canvas;
  if ($$props.ydata3 === void 0 && $$bindings.ydata3 && ydata3 !== void 0)
    $$bindings.ydata3(ydata3);
  if ($$props.ydata4 === void 0 && $$bindings.ydata4 && ydata4 !== void 0)
    $$bindings.ydata4(ydata4);
  if ($$props.xdata === void 0 && $$bindings.xdata && xdata !== void 0)
    $$bindings.xdata(xdata);
  return `<canvas${add_attribute("this", canvas, 0)}></canvas>`;
});
function get_month_name(number) {
  switch (number) {
    case "01":
      return "Jan";
    case "02":
      return "Feb";
    case "03":
      return "Mar";
    case "04":
      return "Apr";
    case "05":
      return "May";
    case "06":
      return "Jun";
    case "07":
      return "Jul";
    case "08":
      return "Aug";
    case "09":
      return "Sep";
    case "10":
      return "Oct";
    case "11":
      return "Nov";
    case "12":
      return "Dec";
  }
}
const Thumbnail_svelte_svelte_type_style_lang = "";
const Indicator_svelte_svelte_type_style_lang = "";
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", classNames("group", $$props.class), 0)} role="${"presentation"}"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button>

  ${open ? `<div class="${"hidden tab_content_placeholder"}"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li>`;
});
const styledActiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",
  pill: "py-3 px-4 text-white bg-blue-600 rounded-lg",
  underline: "p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",
  none: ""
};
const styledInactiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
  pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
  underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
  none: ""
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul>
${divider ? `${slots.divider ? slots.divider({ style }) : `
    <div class="${"h-px bg-gray-200 dark:bg-gray-700"}"></div>
  `}` : ``}
<div${add_attribute("class", contentClass, 0)} role="${"tabpanel"}" aria-labelledby="${"id-tab"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const dataObj = {
    daily_gas_7days: { xdata: [], ydata: [], ydata2: [] },
    daily_gas_30days: { xdata: [], ydata: [], ydata2: [] },
    daily_active_users_7days: { xdata: [], ydata: [] },
    daily_active_users_30days: { xdata: [], ydata: [] },
    daily_new_users_7days: { xdata: [], ydata: [] },
    daily_new_users_30days: { xdata: [], ydata: [] },
    daily_transactions_7days: { xdata: [], ydata: [] },
    daily_transactions_30days: { xdata: [], ydata: [] },
    daily_transaction_fee_7days: {
      xdata: [],
      ydata: [],
      ydata2: [],
      ydata3: [],
      ydata4: []
    },
    daily_transaction_fee_30days: {
      xdata: [],
      ydata: [],
      ydata2: [],
      ydata3: [],
      ydata4: []
    },
    daily_active_contracts_7days: { xdata: [], ydata: [], ydata2: [] },
    daily_active_contracts_30days: { xdata: [], ydata: [], ydata2: [] },
    daily_new_contracts_7days: { xdata: [], ydata: [] },
    daily_new_contracts_30days: { xdata: [], ydata: [] }
  };
  dataObj.daily_new_users_7days.xdata = data.daily_new_users_7days.map(function(e) {
    let month = get_month_name(e.first_time.substring(5, 7));
    let day = e.first_time.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_new_users_7days.ydata = data.daily_new_users_7days.map((e) => e.new_users);
  dataObj.daily_new_users_30days.xdata = data.daily_new_users_30days.map(function(e) {
    let month = get_month_name(e.first_time.substring(5, 7));
    let day = e.first_time.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_new_users_30days.ydata = data.daily_new_users_30days.map((e) => e.new_users);
  dataObj.daily_active_users_7days.xdata = data.daily_active_users_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_active_users_7days.ydata = data.daily_active_users_7days.map((e) => e.users);
  dataObj.daily_active_users_30days.xdata = data.daily_active_users_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_active_users_30days.ydata = data.daily_active_users_30days.map((e) => e.users);
  dataObj.daily_new_contracts_7days.xdata = data.daily_new_contracts_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_new_contracts_7days.ydata = data.daily_new_contracts_7days.map((e) => e.new_contracts);
  dataObj.daily_new_contracts_30days.xdata = data.daily_new_contracts_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_new_contracts_30days.ydata = data.daily_new_contracts_30days.map((e) => e.new_contracts);
  dataObj.daily_active_contracts_7days.xdata = data.daily_active_contracts_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_active_contracts_7days.xdata = [...new Set(dataObj.daily_active_contracts_7days.xdata)];
  dataObj.daily_active_contracts_7days.ydata = data.daily_active_contracts_7days.map(function(e) {
    let contracts = 0;
    if (e.status == "Successful Execution") {
      contracts = e.contracts;
    }
    return contracts;
  });
  dataObj.daily_active_contracts_7days.ydata2 = data.daily_active_contracts_7days.map(function(e) {
    let contracts = 0;
    if (e.status == "Failed Execution") {
      contracts = e.contracts;
    }
    return contracts;
  });
  dataObj.daily_active_contracts_30days.xdata = data.daily_active_contracts_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_active_contracts_30days.xdata = [...new Set(dataObj.daily_active_contracts_30days.xdata)];
  dataObj.daily_active_contracts_30days.ydata = data.daily_active_contracts_30days.map(function(e) {
    let contracts = 0;
    if (e.status == "Successful Execution") {
      contracts = e.contracts;
    }
    return contracts;
  });
  dataObj.daily_active_contracts_30days.ydata2 = data.daily_active_contracts_30days.map(function(e) {
    let contracts = 0;
    if (e.status == "Failed Execution") {
      contracts = e.contracts;
    }
    return contracts;
  });
  dataObj.daily_gas_7days.xdata = data.daily_gas_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_gas_7days.ydata = data.daily_gas_7days.map((e) => e.total_gas_used_peta);
  dataObj.daily_gas_30days.xdata = data.daily_gas_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_gas_30days.ydata = data.daily_gas_30days.map((e) => e.total_gas_used_peta);
  dataObj.daily_transactions_7days.xdata = data.daily_transactions_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_transactions_7days.ydata = data.daily_transactions_7days.map((e) => e.daily_transaction_count);
  dataObj.daily_transactions_30days.xdata = data.daily_transactions_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_transactions_30days.ydata = data.daily_transactions_30days.map((e) => e.daily_transaction_count);
  dataObj.daily_transaction_fee_7days.xdata = data.daily_transaction_fee_7days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_transaction_fee_7days.ydata = data.daily_transaction_fee_7days.map((e) => e.total_tx_fees_near);
  dataObj.daily_transaction_fee_7days.ydata2 = data.daily_transaction_fee_7days.map((e) => e.total_tx_fees_usd);
  dataObj.daily_transaction_fee_7days.ydata3 = data.daily_transaction_fee_7days.map((e) => e.avg_tx_fees_near);
  dataObj.daily_transaction_fee_7days.ydata4 = data.daily_transaction_fee_7days.map((e) => e.avg_tx_fees_usd);
  dataObj.daily_transaction_fee_30days.xdata = data.daily_transaction_fee_30days.map(function(e) {
    let month = get_month_name(e.date.substring(5, 7));
    let day = e.date.substring(8, 10);
    return month + " " + day;
  });
  dataObj.daily_transaction_fee_30days.ydata = data.daily_transaction_fee_30days.map((e) => e.total_tx_fees_near);
  dataObj.daily_transaction_fee_30days.ydata2 = data.daily_transaction_fee_30days.map((e) => e.total_tx_fees_usd);
  dataObj.daily_transaction_fee_30days.ydata3 = data.daily_transaction_fee_30days.map((e) => e.avg_tx_fees_near);
  dataObj.daily_transaction_fee_30days.ydata4 = data.daily_transaction_fee_30days.map((e) => e.avg_tx_fees_usd);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<body class="${"bg-gray-100 h-screen"}"><header>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header>
	<main><div class="${"static my-8 mx-6 2xl:mx-96 items-center justify-center"}">${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Summary" }, {}, {
        default: () => {
          return `<p class="${"text-md text-white"}">The purpose of this analysis is to improve upon the existing <a href="${"https://near.org/blog/near-weekly-on-chain-data-report-december-23/"}">Weekly NEAR Transparency Report</a>, where each week, the NEAR Foundation publishes data to help the NEAR community
						understand the ecosystem&#39;s health by showcasing a collection of key metrics. This
						analysis examines the report in terms of three different elements; user interface/user
						experience, quality of data visualisation of charts, and the language used to aid the
						charts. In the corresponsing tabs, you can find a critical analysis on each of these
						elements.
						<br>
						Improving upon the report with these criticisms in mind, I have provided a new report, containing
						the most relevant metrics displayed with interactive real-time charts using data from FlipsideCrypto,
						along with explanations as to why these metrics were chosen and how the UI/UX of the report
						has been improved, and ultimately better facilitating the readers to get the best possible
						snapshot of NEAR, it&#39;s users, and it&#39;s ecosystem.
					</p>`;
        }
      })}
				${validate_component(TabItem, "TabItem").$$render($$result, { title: "UI/UX" }, {}, {
        default: () => {
          return `<b class="${"text-md text-white"}">Positives</b>
					<ul><li class="${"text-md text-white"}">Clear report look and feel</li>
						<li class="${"text-md text-white"}">Good flow with clear identifiable sections</li></ul>
					<b class="${"text-md text-white"}">Negatives</b>
					<ul><li class="${"text-md text-white"}">Enourmous image at the top of the report, confuses reader as to what they just
							navigated to.
						</li>
						<li class="${"text-md text-white"}">Charts are almost unreadable at standard zoom, just static image with no
							interactivity.
						</li></ul>`;
        }
      })}
				${validate_component(TabItem, "TabItem").$$render($$result, { title: "Charts/Metrics" }, {}, {
        default: () => {
          return `<b class="${"text-md text-white"}">Positives</b>
					<ul><li class="${"text-md text-white"}">Good choice of key metrics, relevant for a weekly report</li></ul>
					<b class="${"text-md text-white"}">Negatives</b>
					<ul><li class="${"text-md text-white"}">Although good choice of metrics, they are not aided with any context, how does this
							compare to previous weeks?
						</li>
						<li class="${"text-md text-white"}">Again, charts are almost unreadable as all the text is too small and there could be a
							better choice in the type of visualisations.
						</li></ul>`;
        }
      })}
				${validate_component(TabItem, "TabItem").$$render($$result, { title: "Language" }, {}, {
        default: () => {
          return `<p class="${"text-md text-white"}">Overall, the language aiding the charts is clear and descriptive. The only criticism is
						that they included language describing data that is not displayed in a chart, which can
						be confusing.
					</p>`;
        }
      })}
				${validate_component(TabItem, "TabItem").$$render($$result, { title: "Improvements" }, {}, {
        default: () => {
          return `<b class="${"text-md text-white"}">UI/UX</b>
					<p class="${"text-md text-white"}">The improved report displayed below includes:</p>
					<ul><li class="${"text-md text-white"}">More legible charts</li>
						<li class="${"text-md text-white"}">Interactivity</li>
						<li class="${"text-md text-white"}">Links to queries that generated the charts</li></ul>
					<p class="${"text-md text-white"}">This gives the reader a smoother more informed experience with clear, interactive
						charts, and if they wish to do so, they can check the query used for themselves.
					</p>
					<br>
					<b class="${"text-md text-white"}">Charts/Metrics</b>
					<p class="${"text-md text-white"}">The improved report adds upon the exisiting by containing the following metrics:</p>
					<ul class="${"text-md text-white"}"><li>Daily New Users Past 7 Days</li>
						<li>Daily New Users Past 30 Days</li>
						<li>Daily Active Users Past 7 Days</li>
						<li>Daily Active Users Past 30 Days</li>
						<li>Daily New Contracts Past 7 Days</li>
						<li>Daily New Contracts Past 30 Days</li>
						<li>Daily Active Contracts past 7 Days</li>
						<li>Daily Active Contracts past 30 Days</li>
						<li>Daily Gas Used Past 7 Days</li>
						<li>Daily Gas Used Past 30 Days</li>
						<li>Daily Transactions Past 7 Days</li>
						<li>Daily Transactions Past 30 Days</li>
						<li>Daily Sum of Transaction Fees Past 7 Days</li>
						<li>Daily Sum of Transaction Fees Past 30 Days</li>
						<li>Daily Average of Transaction Fees past 7 Days</li>
						<li>Daily Average of Transaction Fees past 30 Days</li>
						<p><br>
							These metrics were chosen as they are the most relevant to include in a report with a period
							of only a week. Users who either hold, conduct transactions, or interact with smart contracts
							on the NEAR platform will want to be informed of the recent user activity, as well as the
							recent costs of interacting with the platform.
							<br><br>
							This collection of metrics improves upon the existing report by complementing the weekly
							metrics with the same metrics, but with more history of 30 days. This gives vital context
							to the metric and gives the reader the ability to compare the most recent week&#39;s results
							with the past month.
							<br><br>
							Additional metrics included are the categorisation of active contracts into successful
							execution and failed execution. This gives transparency into the platform as contract execution
							is often not guaranteed.
							<br><br>
							An additonal category has been included in the transaction fee metrics, displaying fees
							in terms of both NEAR and USD, which is beneficial for the user as chances are they are
							still accounting in terms of dollars in their head. An additional metric of daily average
							fees has also been included.
						</p></ul>`;
        }
      })}`;
    }
  })}</div>
		<div class="${"static my-16 mx-6 2xl:mx-24 flex items-center justify-center"}"><div class="${"grid grid-cols-1 gap-2"}">${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily New Users Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/84ac53b1-e761-4c35-a9aa-80cdfed24449"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyNewUsers, "DailyNewUsers").$$render(
          $$result,
          {
            xdata: dataObj.daily_new_users_7days.xdata,
            ydata: dataObj.daily_new_users_7days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>Over the past week, the platform saw a sharp rise in the number of new users (accounts)
						peaking at over 35,000 new users in a day on Jan 13th, followed by a steady decline.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily New Users Past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/45f1db19-3826-4b13-ab9d-e2ba7206bba3"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyNewUsers, "DailyNewUsers").$$render(
          $$result,
          {
            xdata: dataObj.daily_new_users_30days.xdata,
            ydata: dataObj.daily_new_users_30days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>Comparing the recent week to the past month, the recent week has seen substantially more
						new users, some days seeing 2-3x more new users the days in the previous weeks.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Active Users Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/035e0e9f-2751-4df6-95ed-2b6c1840210f"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyActiveUsers, "DailyActiveUsers").$$render(
          $$result,
          {
            xdata: dataObj.daily_active_users_7days.xdata,
            ydata: dataObj.daily_active_users_7days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The number of daily active users over the past 7 days has been in steady decline, down
						from a peak on Jan 13th just shy of 150,000 active users.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Active Users Past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/ac844938-faa5-44f6-a412-4a8309253f44"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyActiveUsers, "DailyActiveUsers").$$render(
          $$result,
          {
            xdata: dataObj.daily_active_users_30days.xdata,
            ydata: dataObj.daily_active_users_30days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In comparison with the previous weeks, the most recent week has seen a substantial
						increase in active users on the platform, from hovering around 40,000 to surging over
						100,000 daily active users.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily New Contracts Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/a999b8d2-0c84-4869-9a8c-83c47c15c232"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyNewContracts, "DailyNewContracts").$$render(
          $$result,
          {
            xdata: dataObj.daily_new_contracts_7days.xdata,
            ydata: dataObj.daily_new_contracts_7days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The number of new contracts created on the platform has been around 6 in the recent
						week.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily New Contracts Past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/49b4fe73-62c2-45b1-8f3b-74ede4d032a1"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyNewContracts, "DailyNewContracts").$$render(
          $$result,
          {
            xdata: dataObj.daily_new_contracts_30days.xdata,
            ydata: dataObj.daily_new_contracts_30days.ydata
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The recents weeks daily new contracts has increased from the previous couple of weeks,
						but nothing substantial.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Active Contracts past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/facfb7c4-beac-4c53-85a1-cc4bcad0873b"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyActiveContracts, "DailyActiveContracts").$$render(
          $$result,
          {
            xdata: dataObj.daily_active_contracts_7days.xdata,
            ydata: dataObj.daily_active_contracts_7days.ydata.filter((n) => n),
            ydata2: dataObj.daily_active_contracts_7days.ydata2.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The number of daily active contracts has been steady, with consistent successful
						execution rates of around 2/3.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Active Contracts past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/227cc041-caf9-4afc-af5e-b71cb9de25bb"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyActiveContracts, "DailyActiveContracts").$$render(
          $$result,
          {
            xdata: dataObj.daily_active_contracts_30days.xdata,
            ydata: dataObj.daily_active_contracts_30days.ydata.filter((n) => n),
            ydata2: dataObj.daily_active_contracts_30days.ydata2.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In comparison to the previous month, the recent week has seen slight more active
						contracts.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Gas Used Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/69b52d8a-5640-4e5b-9459-34fdd4693348"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyGas, "DailyGas").$$render(
          $$result,
          {
            xdata: dataObj.daily_gas_7days.xdata,
            ydata: dataObj.daily_gas_7days.ydata.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The past week of daily gas used, measured in peta gas, has been steady around 7 peta
						gas.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Gas Used Past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/2727637e-a42e-487b-9f68-c5c2a8c724ca"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyGas, "DailyGas").$$render(
          $$result,
          {
            xdata: dataObj.daily_gas_30days.xdata,
            ydata: dataObj.daily_gas_30days.ydata.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In comparison to the previous month, daily gas used has seen a slight increase of the
						recent week.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Transactions Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/c26914bd-4a9c-4adb-bcf3-642fdc85cb1e/visualizations/64426bcb-e22b-46eb-8621-f7faab39d929"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactions, "DailyTransactions").$$render(
          $$result,
          {
            xdata: dataObj.daily_transactions_7days.xdata,
            ydata: dataObj.daily_transactions_7days.ydata.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The number of transaction conducted over the recent week started strong and has
						decreased slightly over time.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Transactions Past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactions, "DailyTransactions").$$render(
          $$result,
          {
            xdata: dataObj.daily_transactions_30days.xdata,
            ydata: dataObj.daily_transactions_30days.ydata.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The recent weeks activity of daily transactions is quite higher than the previous weeks,
						hovering around 300,000 transactions a day to 500,000 transactions a day.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Sum of Transaction Fees Past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactionFeesTotal, "DailyTransactionFeesTotal").$$render(
          $$result,
          {
            xdata: dataObj.daily_transaction_fee_7days.xdata,
            ydata: dataObj.daily_transaction_fee_7days.ydata.filter((n) => n),
            ydata2: dataObj.daily_transaction_fee_7days.ydata2.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In the last week, the daily sum of transaction fees has been steady at around $1,400 or
						700 NEAR.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Sum of Transaction Fees past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactionFeesTotal, "DailyTransactionFeesTotal").$$render(
          $$result,
          {
            xdata: dataObj.daily_transaction_fee_30days.xdata,
            ydata: dataObj.daily_transaction_fee_30days.ydata.filter((n) => n),
            ydata2: dataObj.daily_transaction_fee_30days.ydata2.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In comparison to the previous month, the daily sum of fees has seen both an increase in
						terms of NEAR and USD, but in terms of USD increasing higher, this could be due to the
						price of NEAR seeing an increase.
					</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Average of Transaction Fees past 7 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/f076a63d-c77f-4fce-b3ff-73f903cc36b7"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactionFeesAvg, "DailyTransactionFeesAvg").$$render(
          $$result,
          {
            xdata: dataObj.daily_transaction_fee_7days.xdata,
            ydata3: dataObj.daily_transaction_fee_7days.ydata3.filter((n) => n),
            ydata4: dataObj.daily_transaction_fee_7days.ydata4.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>The average transaction fee in the past week has been steady in both NEAR and USD.</p></div>
				${validate_component(Chart, "Chart").$$render(
    $$result,
    {
      className: "col-span-1",
      title: "Daily Average of Transaction Fees past 30 Days",
      query_link: "https://next.flipsidecrypto.xyz/edit/queries/7029bdcf-0bfc-4e93-9b84-68fb0229a64e"
    },
    {},
    {
      figure: () => {
        return `<div class="${"h-96"}" slot="${"figure"}">${validate_component(DailyTransactionFeesAvg, "DailyTransactionFeesAvg").$$render(
          $$result,
          {
            xdata: dataObj.daily_transaction_fee_30days.xdata,
            ydata3: dataObj.daily_transaction_fee_30days.ydata3.filter((n) => n),
            ydata4: dataObj.daily_transaction_fee_30days.ydata4.filter((n) => n)
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}
				<div class="${"ml-8 my-2 max-w-3xl"}"><p>In comparison, the average daily fee has decreased in terms of NEAR but increased in
						terms of USD, likely due to the price of NEAR increasing recently.
					</p></div>
				<div class="${"ml-8 mt-6 max-w-3xl"}"><p>Over the past week, the NEAR platform has experience an increase in activity of almost
						all metrics as compared to the previous week beforehand.
					</p></div></div></div></main>
	<footer>${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer></body>`;
});
export {
  Page as default
};
