import { Typography } from "@mui/material";
import "./Typography.css";

type SectionTitleProps = {
  label: string;
};

export default function SectionTitle({ label }: SectionTitleProps) {
  return (
    <div className="section-title">
      <Typography style={{ fontWeight: 300 }}>{label}</Typography>
    </div>
  );
}
