  export const dateFormat=(bDate)=>{

  const blogdate = new Date(bDate);
  const year = blogdate.getFullYear();
  let month = blogdate.getMonth()+1;
  let dt = blogdate.getDate();
  
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    month = '0' + month;
  }
  
  return (year+'-' + month + '-'+dt);
}

