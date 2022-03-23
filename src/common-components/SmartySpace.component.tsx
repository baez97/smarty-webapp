export function SmartySpace(props: { height?: number | string, width?: number | string, className?: string }) {
  return <div style={{ minWidth: props.width, minHeight: props.height }} className={props.className} />
}