import { ReportI, YearT } from "../types"

class CreditCard {
    
    report:ReportI
    dataByMonth 
    reportByYear

    constructor(report) {
        this.setReport(report)
    }
    
    public setReport(report: ReportI) {
        this.report = report
    }
    
    getReport(here = false){

        if(here)
            return this.report
        else
            return this
    }
    byYear(year: YearT, here = false){
        this.reportByYear = this.report[year]

        if(here)
            return this.reportByYear
        else
            return this

    }
    byMonth(month: string, year? : YearT, here = false){
        
        const report = year? this.byYear(year,true) :this.report

        const reportArray = Object.entries(report)
        reportArray.map( ([clave,valor]) => {
            this.dataByMonth.push([...[valor].filter( el => el == month )]) 
        })
        
        if(here)
            return this.report
        else
            return this

    }
}

export default CreditCard