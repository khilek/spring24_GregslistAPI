import { dbContext } from "../db/DbContext.js"


class JobsService{


async getJobs (){
const jobs = await dbContext.Jobs.find()
return jobs
}

async getJobById(jobId){
const job = await dbContext.Jobs.findById(jobId)

if (!job) throw new Error (`No job by id: ${jobId}`)

return job

}


async searchJobs(searchQuery){

const jobs = dbContext.Jobs.find(searchQuery)

return jobs
}




}





export const jobsService = new JobsService()