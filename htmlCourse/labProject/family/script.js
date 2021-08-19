function yearDiffNow(d) {
  let diff = new Date() - d;
  return (diff / 1000 / 60 / 60 / 24 / 365).toFixed(1);
}

let boy = new Date(2021, 12, 1).getTime();
document.getElementById('boy').innerHTML = yearDiffNow(boy);

let william = new Date(2019, 9, 1).getTime();
document.getElementById('william').innerHTML = yearDiffNow(william);

let clara = new Date(2018, 4, 1).getTime();
document.getElementById('clara').innerHTML = yearDiffNow(clara);

let emily = new Date(2016, 11, 1).getTime();
document.getElementById('emily').innerHTML = yearDiffNow(emily);

let hannah = new Date(2014, 12, 1).getTime();
document.getElementById('hannah').innerHTML = yearDiffNow(hannah);

let nathan = new Date(1992, 7, 1).getTime();
document.getElementById('nathan').innerHTML = yearDiffNow(nathan);

let bella = new Date(2021, 4, 1).getTime();
document.getElementById('bella').innerHTML = yearDiffNow(bella);

let daisy = new Date(2021, 5, 1).getTime();
document.getElementById('daisy').innerHTML = yearDiffNow(daisy);
