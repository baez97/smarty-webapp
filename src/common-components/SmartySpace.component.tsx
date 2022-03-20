export function SmartySpace(props: { height?: number | string, width?: number | string }) {
  return <div style={{ minWidth: props.width, minHeight: props.height }} />
}