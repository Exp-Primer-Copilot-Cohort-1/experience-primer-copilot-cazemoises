function skillsMember() {
  var skills = document.getElementById('skills');
  var member = document.getElementById('member');
  if (member.value == 'Member') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}