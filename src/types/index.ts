
export type YearT = string | number

export interface MonthsI {
    january: string;
    february: string;
    march: string;
    april: string;
    may: string;
    june: string;
    july: string;
    august: string;
    september: string;
    october: string;
    november: string;
    december: string;
  }
  
export interface YearI {
    [year: string]: MonthsI;
}

export interface ReportI{
    years: YearI[]
}