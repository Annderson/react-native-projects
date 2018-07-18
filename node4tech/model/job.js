class Job {
    constructor(id, name, salary, area, description, skills, differentials, isPcd, isActive) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.area = area;
        this.description = description;
        this.skills = skills;
        this.differentials = differentials;
        this.isPcd = isPcd;
        this.isActive = isActive;
    }
}

module.exports = Job;