import { Switch } from "@mui/material";

export function SwitchCustom({ onClick }) {
    return <Switch aria-label="Theme Switch" color="primary" className="customSwitch" onClick={onClick}/>;
}
