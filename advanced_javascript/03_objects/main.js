var business = {
  first: "google",
  second: "apple",
  third: "microsoft",
  fourth: "facebook",
  fifth: "twitter",
  fullName: function() {
    return `${this.first} ${this.fifth}`;
  }
};

document.getElementById("test").innerHTML = business.fullName();