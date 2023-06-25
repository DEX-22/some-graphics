class DataService{

    async getReport(){
        let dataReport = await fetch('./data/transactions.json')

        dataReport = await dataReport.json()
        
        return dataReport
    }

}