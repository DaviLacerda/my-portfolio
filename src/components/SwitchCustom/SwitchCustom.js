import { Switch } from "@mui/material";

export function SwitchCustom({ onClick }) {
    return <Switch color="primary" className="customSwitch" onClick={onClick} />;
}
