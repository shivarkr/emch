document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Gather form data
    const satisfactionLevel = parseFloat(document.getElementById("satisfactionLevel").value);
    const lastEvaluation = parseFloat(document.getElementById("lastEvaluation").value);
    const numberOfProjects = parseInt(document.getElementById("numberOfProjects").value);
    const averageMonthlyHours = parseInt(document.getElementById("averageMonthlyHours").value);
    const timeSpentInCompany = parseInt(document.getElementById("timeSpentInCompany").value);
    const workAccident = parseInt(document.getElementById("workAccident").value);
    const promotionLast5Years = parseInt(document.getElementById("promotionLast5Years").value);
    const salary = document.getElementById("salary").value;
    const department = document.getElementById("department").value;
    
    // Perform prediction (simplified logic)
    const predictionOutcome = predictEmployeeChurn(satisfactionLevel, lastEvaluation, numberOfProjects, averageMonthlyHours, timeSpentInCompany, workAccident, promotionLast5Years,salary,department);
    
    // Display result
    const resultDiv = document.getElementById("predictionResult");
    if(predictionOutcome< 0.81){
        resultDiv.innerText = "The employee leaves company."
    }
    else{
        resultDiv.innerText = "The employee stays in the company."
    }
});

function predictEmployeeChurn(satisfactionLevel, lastEvaluation, numberOfProjects, averageMonthlyHours, timeSpentInCompany, workAccident, promotionLast5Years,salary,department) {
    // Simple example logic for demonstration
    // Replace with actual AI model integration
    if(numberOfProjects>5){
        numberOfProjects= 0
    }
    else{
        numberOfProjects = numberOfProjects /5
        numberOfProjects = 1- numberOfProjects
    }
    if(averageMonthlyHours>360){
        averageMonthlyHours =0
    }
    else{
        averageMonthlyHours = averageMonthlyHours /360
        averageMonthlyHours = 1- averageMonthlyHours
    }
    if( timeSpentInCompany>20){
        timeSpentInCompany = 1
    }
    else{
        timeSpentInCompany = timeSpentInCompany /20
    }
    const prediction = (0.6*satisfactionLevel +0.2*lastEvaluation+numberOfProjects*0.3 + averageMonthlyHours*0.3+ timeSpentInCompany*0.4 + workAccident*0.3 + promotionLast5Years*0.5+salary*0.4);
    const result = Math.exp(-prediction);
    const gef = 1 / (1+result);
    return gef;
}
