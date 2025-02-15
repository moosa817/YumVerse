// import * as React from "react";
// import dayjs from "dayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";

// const shortcutsItems = [
//     {
//         label: "Last 7 Days",
//         getValue: () => {
//             const today = dayjs();
//             return [today.subtract(7, "day"), today];
//         },
//     },
//     {
//         label: "Last 14 Days",
//         getValue: () => {
//             const today = dayjs();
//             return [today.subtract(14, "day"), today];
//         },
//     },
//     {
//         label: "Current Month",
//         getValue: () => {
//             const today = dayjs();
//             return [today.startOf("month"), today.endOf("month")];
//         },
//     },
//     {
//         label: "Previous Month",
//         getValue: () => {
//             const today = dayjs();
//             const endOfPrevMonth = today.startOf("month").subtract(1, "day");
//             return [endOfPrevMonth.startOf("month"), endOfPrevMonth];
//         },
//     },
//     {
//         label: "Last 2 Months",
//         getValue: () => {
//             const today = dayjs();
//             const endOfPrevMonth = today.startOf("month").subtract(1, "day");
//             const startOfPrev2Months = endOfPrevMonth
//                 .startOf("month")
//                 .subtract(1, "day")
//                 .startOf("month");
//             return [startOfPrev2Months, endOfPrevMonth];
//         },
//     },
// ];

export default function DateRangePicker({ date, setDate, onChange }) {
  return (
    <></>
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //     <StaticDateRangePicker
    //         value={date}
    //         onChange={(value) => {
    //             setDate(value);
    //             onChange(value);
    //         }}
    //         slotProps={{
    //             shortcuts: {
    //                 items: shortcutsItems,
    //             },
    //             actionBar: { actions: [] },
    //         }}
    //         calendars={1}
    //     />
    // </LocalizationProvider>
  );
}
