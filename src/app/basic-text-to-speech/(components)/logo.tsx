interface Props {
  className?: string;
}

export function Logo({ className = "" }: Props) {
  return (
    <svg
      width="118"
      height="60"
      viewBox="0 0 118 60"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="27" width="4" height="6" rx="2" />
      <rect x="6" y="23.5" width="4" height="13" rx="2" />
      <rect x="12" y="17" width="4" height="26" rx="2" />
      <rect x="18" y="26.5" width="4" height="7" rx="2" />
      <rect x="24" y="20.5" width="4" height="19" rx="2" />
      <rect x="30" y="15" width="4" height="30" rx="2" />
      <rect x="36" y="21.5" width="4" height="17" rx="2" />
      <rect x="42" y="19" width="4" height="22" rx="2" />
      <rect x="48" y="11" width="4" height="38" rx="2" />
      <rect x="54" width="4" height="60" rx="2" />
      <rect x="60" y="6.5" width="4" height="47" rx="2" />
      <rect x="66" y="11" width="4" height="38" rx="2" />
      <rect x="72" y="16" width="4" height="28" rx="2" />
      <rect x="78" y="10.5" width="4" height="39" rx="2" />
      <rect x="84" y="25.5" width="4" height="9" rx="2" />
      <rect x="90" y="22.5" width="4" height="15" rx="2" />
      <rect x="96" y="20.5" width="4" height="19" rx="2" />
      <rect x="102" y="23" width="4" height="14" rx="2" />
      <rect x="108" y="25" width="4" height="10" rx="2" />
      <rect x="114" y="27.5" width="4" height="5" rx="2" />
    </svg>
  );
}
