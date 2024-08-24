function skillsMember() {
    var member = {
        name: 'Asmat',
        age: 30,
        skills: ['HTML', 'CSS', 'JS'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    };

    member.showSkills();
}