interface Dataset {
  label: String;
  data: Number[];
  backgroundColor: String[];
  hoverOffset: Number;
}

export interface DoughnutData {
  labels: String[];
  datasets: Dataset[];
}

export type PlaneGeometryArgsProps = JSX.IntrinsicElements["planeGeometry"]["args"];