
function Bank(props) {
  
  return (
    <div class="card mb-2" style={{ width: '24%' }}>
      <img class="card-img-top p-8" src={props.imageUrl} height="190px" alt="" style={{ objectFit: 'contain' }} />
      <div class="card-body">
        {props.subtitle}
      </div>
      <div class="mureciet pt-0 p-4">
        <a href={"/apply/" + props.id} className="btn btn-blue rounded w-100 mb-2">Müraciət et</a>
      </div>
    </div>
  );
}

export default Bank;