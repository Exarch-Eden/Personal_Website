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