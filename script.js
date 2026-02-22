const jobs = [
{
id:1,
company:"Mobile First Corp",
position:"React Native Developer",
location:"Remote",
type:"Full-time",
salary:"$130k - $175k",
description:"Build cross-platform mobile applications using React Native.",
status:"all"
},
{
id:2,
company:"WebFlow Agency",
position:"Frontend Engineer",
location:"Berlin",
type:"Full-time",
salary:"$70k - $90k",
description:"Create stunning web experiences using modern frameworks.",
status:"all"
},
{
id:3,
company:"DataVista",
position:"Data Analyst",
location:"London",
type:"Hybrid",
salary:"$45k - $60k",
description:"Analyze business data and generate actionable insights.",
status:"all"
},
{
id:4,
company:"CloudFirst Ltd",
position:"Backend Developer",
location:"Paris",
type:"Remote",
salary:"$80k - $100k",
description:"Design scalable backend systems using Node.js.",
status:"all"
},
{
id:5,
company:"Innovent",
position:"UI/UX Designer",
location:"Amsterdam",
type:"Contract",
salary:"$60k - $75k",
description:"Craft user-friendly digital experiences.",
status:"all"
},
{
id:6,
company:"MegaTech",
position:"Android Developer",
location:"Toronto",
type:"Full-time",
salary:"$90k - $120k",
description:"Develop native Android apps for global clients.",
status:"all"
},
{
id:7,
company:"StartupXYZ",
position:"Product Manager",
location:"Remote",
type:"Full-time",
salary:"$110k - $140k",
description:"Lead product strategy and roadmap execution.",
status:"all"
},
{
id:8,
company:"TechCore",
position:"DevOps Engineer",
location:"New York",
type:"Full-time",
salary:"$100k - $130k",
description:"Manage CI/CD pipelines and cloud infrastructure.",
status:"all"
}
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

function updateDashboard(){
document.getElementById("totalCount").innerText = jobs.length;
document.getElementById("interviewCount").innerText =
jobs.filter(j=>j.status==="interview").length;
document.getElementById("rejectedCount").innerText =
jobs.filter(j=>j.status==="rejected").length;
}

function renderJobs(){
jobContainer.innerHTML="";

let filtered =
currentTab==="all"
? jobs
: jobs.filter(j=>j.status===currentTab);

document.getElementById("tabJobCount").innerText =
filtered.length+" Jobs";

if(filtered.length===0){
emptyState.classList.remove("hidden");
}else{
emptyState.classList.add("hidden");

filtered.forEach(job=>{

//  STATUS BADGE LOGIC
let statusText = "NOT APPLIED";
let statusClass = "badge bg-[#EEF4FF] text-black";

if(job.status==="interview"){
statusText = "INTERVIEW";
statusClass = "badge badge-success";
}
else if(job.status==="rejected"){
statusText = "REJECTED";
statusClass = "badge badge-error";
}

jobContainer.innerHTML+=`
<div class="card bg-base-100 shadow ">
<div class="card-body">

<div class="flex justify-between">
<div>
<h2 class="font-bold text-lg">${job.company}</h2>
<p class="text-sm text-gray-500">${job.position}</p>
<p class="text-sm text-gray-400">${job.location} • ${job.type} • ${job.salary}</p>
</div>

<button onclick="deleteJob(${job.id})"
class="btn btn-ghost btn-sm">
<i class="fa-regular fa-trash-can"></i>
</button>
</div>

<!--  STATUS BADGE -->

<div class="mt-2">
<span class="${statusClass}">${statusText}</span>
</div>

<p class="mt-3 text-sm">${job.description}</p>

<div class="flex gap-3 mt-4">
<button onclick="toggleStatus(${job.id},'interview')"
class="btn btn-success btn-outline btn-sm">
Interview
</button>

<button onclick="toggleStatus(${job.id},'rejected')"
class="btn btn-error btn-outline btn-sm">
Rejected
</button>
</div>

</div>
</div>
`;
});
}

updateDashboard();
}

function toggleStatus(id,type){
const job = jobs.find(j=>j.id===id);

if(job.status===type){
job.status="all";
}else{
job.status=type;
}

renderJobs();
}

function deleteJob(id){
const index = jobs.findIndex(j=>j.id===id);
jobs.splice(index,1);
renderJobs();
}

document.querySelectorAll(".tab").forEach(tab=>{
tab.addEventListener("click",function(){

document.querySelectorAll(".tab")
.forEach(t=>t.classList.remove("tab-active"));

this.classList.add("tab-active");

currentTab=this.dataset.tab;
renderJobs();
});
});

renderJobs();