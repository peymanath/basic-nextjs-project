import BaseIcon from "@/icon-pack/config/base-icon";
import type { SvgIconType } from "@/icon-pack/config/icon.types";

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <g transform="translate(-364 -188)"><g><path d="M5,0H0" transform="translate(373.5 198.65)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M0,8.01v9.93c0,1.8,1.29,2.56,2.87,1.69l4.88-2.71a2.118,2.118,0,0,1,1.87,0l4.88,2.71c1.58.88,2.87.12,2.87-1.69V3.86A3.875,3.875,0,0,0,13.51,0H3.86A3.869,3.869,0,0,0,0,3.86" transform="translate(367.32 190)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path d="M0,0H24V24H0Z" transform="translate(364 188)" fill="none" opacity="0"/></g></g>
    </BaseIcon>
  );
}