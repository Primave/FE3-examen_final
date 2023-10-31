import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const { state, fetchDentista } = useContextGlobal();
  const { theme, dentista } = state;
  const params = useParams();

  useEffect(() => {
    fetchDentista(params.id);
  }, [fetchDentista, params.id]);

  return (
    <div className={theme}>
      <div className='center'>
        <h1 className='detail-titulo'>Detail Dentist</h1>
        <img className="card-img" src={doctor} alt="Doctor" />
        <p>Name: {dentista.name}</p>
        <p>Email: {dentista.email}</p>
        <p>Phone: {dentista.phone}</p>
        <p>Website: {dentista.website}</p>
      </div>
    </div>
  );
};

export default Detail