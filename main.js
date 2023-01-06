function hide() {
  document.getElementById("thankyou").style.display = "none";
}
function thank() {
    if(document.querySelector('input[name="rate"]:checked')==null)return;
    let v =(document.querySelector('input[name="rate"]:checked').value);
  let rate = document.getElementById("rate");
  let thx = document.getElementById("thankyou");
  rate.style.display = "none";
  thx.style = display = "block";
  document.getElementById("v").innerHTML=v;
}
