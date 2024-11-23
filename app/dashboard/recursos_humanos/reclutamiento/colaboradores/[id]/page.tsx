"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const fakePeople = [
  {
    id: 1,
    nombre: "Juan Perez",
    apellidos: "Perez",
    email: "juan.perez@example.com",
    fecha_de_nacimiento: "1985-06-15",
    telefono: "555-1234",
    rfc: "RFC34K353",
    curp: "JUAP850615HDFRRN04",
    imss: "12345678901",
    fecha_ingreso: "2010-01-01",
    fecha_baja: "2023-06-30",
    entidad: "CDMX",
    cargo: "Gerente",
    calle: "Avenida Reforma",
    int: "10",
    ext: "15",
    colonia: "Centro",
    ciudad: "Ciudad de Mexico",
    estado: "CDMX",
    codigo_postal: "06000",
  },
  {
    id: 2,
    nombre: "Julia Lopez",
    apellidos: "Lopez",
    email: "julia.lopez@example.com",
    fecha_de_nacimiento: "1990-09-10",
    telefono: "555-2345",
    rfc: "RFC35H353",
    curp: "JUOL900910MDFPPL09",
    imss: "23456789012",
    fecha_ingreso: "2015-03-15",
    fecha_baja: "2024-02-10",
    entidad: "Jalisco",
    cargo: "Analista",
    calle: "Calle 5",
    int: "12",
    ext: "22",
    colonia: "Santa Maria",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    codigo_postal: "44100",
  },
  {
    id: 3,
    nombre: "Carlos Ruiz",
    apellidos: "Ruiz",
    email: "carlos.ruiz@example.com",
    fecha_de_nacimiento: "1982-03-20",
    telefono: "555-3456",
    rfc: "RFC346373",
    curp: "CARU820320HDFRLN01",
    imss: "34567890123",
    fecha_ingreso: "2012-07-12",
    fecha_baja: "2023-12-05",
    entidad: "Nuevo Leon",
    cargo: "Coordinador",
    calle: "Avenida Juarez",
    int: "5",
    ext: "10",
    colonia: "Las Palmas",
    ciudad: "Monterrey",
    estado: "Nuevo Leon",
    codigo_postal: "64000",
  },
  {
    id: 4,
    nombre: "Ana Torres",
    apellidos: "Torres",
    email: "ana.torres@example.com",
    fecha_de_nacimiento: "1988-11-22",
    telefono: "555-4567",
    curp: "ANTO881122MDFRRN07",
    imss: "45678901234",
    fecha_ingreso: "2018-05-10",
    fecha_baja: "2024-01-10",
    entidad: "CDMX",
    cargo: "Desarrolladora",
    calle: "Calle 10",
    int: "8",
    ext: "16",
    colonia: "Condesa",
    ciudad: "Ciudad de Mexico",
    estado: "CDMX",
    codigo_postal: "06100",
  },
  {
    id: 5,
    nombre: "Pedro Garcia",
    apellidos: "Garcia",
    email: "pedro.garcia@example.com",
    fecha_de_nacimiento: "1992-01-30",
    telefono: "555-5678",
    curp: "PEGA920130HDFRLP02",
    imss: "56789012345",
    fecha_ingreso: "2017-08-21",
    fecha_baja: "2023-11-15",
    entidad: "CDMX",
    cargo: "Representante",
    calle: "Avenida Insurgentes",
    int: "20",
    ext: "30",
    colonia: "Polanco",
    ciudad: "Ciudad de Mexico",
    estado: "CDMX",
    codigo_postal: "11560",
  },
  {
    id: 6,
    nombre: "Luisa Gomez",
    apellidos: "Gomez",
    email: "luisa.gomez@example.com",
    fecha_de_nacimiento: "1994-07-05",
    telefono: "555-6789",
    curp: "LUGO940705MDFMLN08",
    imss: "67890123456",
    fecha_ingreso: "2019-09-15",
    fecha_baja: "2024-03-01",
    entidad: "Jalisco",
    cargo: "Contadora",
    calle: "Calle de las Flores",
    int: "3",
    ext: "7",
    colonia: "Atenas",
    ciudad: "Guadalajara",
    estado: "Jalisco",
    codigo_postal: "44150",
  },
  {
    id: 7,
    nombre: "Sofia Martinez",
    apellidos: "Martinez",
    email: "sofia.martinez@example.com",
    fecha_de_nacimiento: "1995-02-17",
    telefono: "555-7890",
    curp: "SOMA950217MDFRNS01",
    imss: "78901234567",
    fecha_ingreso: "2016-06-09",
    fecha_baja: "2023-12-20",
    entidad: "Puebla",
    cargo: "Abogada",
    calle: "Calle 12",
    int: "7",
    ext: "12",
    colonia: "La Paz",
    ciudad: "Puebla",
    estado: "Puebla",
    codigo_postal: "72000",
  },
  {
    id: 8,
    nombre: "Ricardo Ortiz",
    apellidos: "Ortiz",
    email: "ricardo.ortiz@example.com",
    fecha_de_nacimiento: "1987-04-25",
    telefono: "555-8901",
    curp: "RIOO870425HDFRRL06",
    imss: "89012345678",
    fecha_ingreso: "2014-11-03",
    fecha_baja: "2024-02-28",
    entidad: "CDMX",
    cargo: "Supervisor",
    calle: "Avenida Juarez",
    int: "6",
    ext: "8",
    colonia: "Roma Norte",
    ciudad: "Ciudad de Mexico",
    estado: "CDMX",
    codigo_postal: "06700",
  },
  {
    id: 9,
    nombre: "Gloria Ramirez",
    apellidos: "Ramirez",
    email: "gloria.ramirez@example.com",
    fecha_de_nacimiento: "1990-05-12",
    telefono: "555-9012",
    curp: "GLRA900512MDFRRL04",
    imss: "90123456789",
    fecha_ingreso: "2016-01-18",
    fecha_baja: "2024-03-05",
    entidad: "Sonora",
    cargo: "Especialista",
    calle: "Avenida del Mar",
    int: "4",
    ext: "5",
    colonia: "Lomas de Chapultepec",
    ciudad: "Hermosillo",
    estado: "Sonora",
    codigo_postal: "83000",
  },
  {
    id: 10,
    nombre: "Javier Diaz",
    apellidos: "Diaz",
    email: "javier.diaz@example.com",
    fecha_de_nacimiento: "1980-08-09",
    telefono: "555-0123",
    curp: "JADI800809HDFRZZ02",
    imss: "01234567890",
    fecha_ingreso: "2008-04-23",
    fecha_baja: "2023-09-25",
    entidad: "Guanajuato",
    cargo: "Administrador",
    calle: "Calle 7",
    int: "10",
    ext: "15",
    colonia: "Centro Historico",
    ciudad: "Leon",
    estado: "Guanajuato",
    codigo_postal: "37000",
  },
  {
    id: 11,
    nombre: "Andrea Herrera",
    apellidos: "Herrera",
    email: "andrea.herrera@example.com",
    fecha_de_nacimiento: "1993-04-14",
    telefono: "555-1234",
    curp: "ANHE930414MDFRRR07",
    imss: "12345678901",
    fecha_ingreso: "2017-06-10",
    fecha_baja: "2024-01-05",
    entidad: "Morelos",
    cargo: "Ejecutiva",
    calle: "Calle Independencia",
    int: "1",
    ext: "25",
    colonia: "El Rosal",
    ciudad: "Cuernavaca",
    estado: "Morelos",
    codigo_postal: "62000",
  },
  {
    id: 12,
    nombre: "Samuel Vega",
    apellidos: "Vega",
    email: "samuel.vega@example.com",
    fecha_de_nacimiento: "1989-10-21",
    telefono: "555-2345",
    curp: "SAVS891021MDFRLL09",
    imss: "23456789012",
    fecha_ingreso: "2012-05-15",
    fecha_baja: "2023-08-31",
    entidad: "Chihuahua",
    cargo: "Director",
    calle: "Calle Zaragoza",
    int: "7",
    ext: "3",
    colonia: "Centro",
    ciudad: "Chihuahua",
    estado: "Chihuahua",
    codigo_postal: "31000",
  },
  {
    id: 13,
    nombre: "Margarita Sanchez",
    apellidos: "Sanchez",
    email: "margarita.sanchez@example.com",
    fecha_de_nacimiento: "1996-02-18",
    telefono: "555-3456",
    curp: "MASA960218MDFRRN05",
    imss: "34567890123",
    fecha_ingreso: "2020-04-12",
    fecha_baja: "2024-01-15",
    entidad: "Veracruz",
    cargo: "Marketing",
    calle: "Calle 14",
    int: "11",
    ext: "23",
    colonia: "Jardin de la Paz",
    ciudad: "Veracruz",
    estado: "Veracruz",
    codigo_postal: "91700",
  },
  {
    id: 14,
    nombre: "Raul Morales",
    apellidos: "Morales",
    email: "raul.morales@example.com",
    fecha_de_nacimiento: "1983-07-22",
    telefono: "555-4567",
    curp: "RAMR830722HDFRRS08",
    imss: "45678901234",
    fecha_ingreso: "2013-05-18",
    fecha_baja: "2023-10-10",
    entidad: "Yucatan",
    cargo: "Vendedor",
    calle: "Calle 9",
    int: "5",
    ext: "10",
    colonia: "Centro",
    ciudad: "Mérida",
    estado: "Yucatan",
    codigo_postal: "97000",
  },
  {
    id: 15,
    nombre: "Eduardo Perez",
    apellidos: "Perez",
    email: "eduardo.perez@example.com",
    fecha_de_nacimiento: "1993-01-10",
    telefono: "555-5678",
    curp: "EDPE930110HDFRRZ01",
    imss: "56789012345",
    fecha_ingreso: "2014-09-23",
    fecha_baja: "2023-11-18",
    entidad: "Sonora",
    cargo: "Logistica",
    calle: "Avenida Benito Juarez",
    int: "6",
    ext: "13",
    colonia: "La Cascada",
    ciudad: "Hermosillo",
    estado: "Sonora",
    codigo_postal: "83100",
  },
  {
    id: 16,
    nombre: "Fernando Vargas",
    apellidos: "Vargas",
    email: "fernando.vargas@example.com",
    fecha_de_nacimiento: "1987-08-29",
    telefono: "555-6789",
    curp: "FEVA870829HDFRLN02",
    imss: "67890123456",
    fecha_ingreso: "2015-06-03",
    fecha_baja: "2024-01-10",
    entidad: "Chihuahua",
    cargo: "Tecnico",
    calle: "Calle del Sol",
    int: "3",
    ext: "15",
    colonia: "Las Vegas",
    ciudad: "Chihuahua",
    estado: "Chihuahua",
    codigo_postal: "31200",
  },
  {
    id: 17,
    nombre: "Laura Ruiz",
    apellidos: "Ruiz",
    email: "laura.ruiz@example.com",
    fecha_de_nacimiento: "1995-09-05",
    telefono: "555-7890",
    curp: "LARU950905MDFRLL03",
    imss: "78901234567",
    fecha_ingreso: "2018-04-28",
    fecha_baja: "2024-02-17",
    entidad: "CDMX",
    cargo: "Community Manager",
    calle: "Calle de la Luna",
    int: "2",
    ext: "5",
    colonia: "Santa Fe",
    ciudad: "Ciudad de Mexico",
    estado: "CDMX",
    codigo_postal: "05300",
  },
  {
    id: 18,
    nombre: "Victor Gomez",
    apellidos: "Gomez",
    email: "victor.gomez@example.com",
    fecha_de_nacimiento: "1992-12-14",
    telefono: "555-8901",
    curp: "VIGO921214HDFMLV02",
    imss: "89012345678",
    fecha_ingreso: "2016-11-05",
    fecha_baja: "2023-12-23",
    entidad: "Durango",
    cargo: "Desarrollador Backend",
    calle: "Avenida Mexico",
    int: "1",
    ext: "20",
    colonia: "Zona Centro",
    ciudad: "Durango",
    estado: "Durango",
    codigo_postal: "34000",
  },
  {
    id: 19,
    nombre: "Daniela Jimenez",
    apellidos: "Jimenez",
    email: "daniela.jimenez@example.com",
    fecha_de_nacimiento: "1984-05-30",
    telefono: "555-9012",
    curp: "DAJI840530MDFJNL04",
    imss: "90123456789",
    fecha_ingreso: "2011-10-01",
    fecha_baja: "2024-04-07",
    entidad: "Tabasco",
    cargo: "Asistente Administrativa",
    calle: "Calle de los Reyes",
    int: "9",
    ext: "25",
    colonia: "Centro",
    ciudad: "Villahermosa",
    estado: "Tabasco",
    codigo_postal: "86000",
  },
  {
    id: 20,
    nombre: "Carlos Hernandez",
    apellidos: "Hernandez",
    email: "carlos.hernandez@example.com",
    fecha_de_nacimiento: "1986-11-11",
    telefono: "555-0123",
    curp: "CAHE861111HDFRNL07",
    imss: "01234567890",
    fecha_ingreso: "2012-03-09",
    fecha_baja: "2024-01-30",
    entidad: "Coahuila",
    cargo: "Supervisor de ventas",
    calle: "Avenida 16",
    int: "8",
    ext: "14",
    colonia: "Norte",
    ciudad: "Saltillo",
    estado: "Coahuila",
    codigo_postal: "25000",
  },
  {
    id: 21,
    nombre: "Gabriela Castillo",
    apellidos: "Castillo",
    email: "gabriela.castillo@example.com",
    fecha_de_nacimiento: "1990-03-18",
    telefono: "555-1234",
    curp: "GACA900318MDFRGL05",
    imss: "12345678901",
    fecha_ingreso: "2014-02-12",
    fecha_baja: "2024-03-15",
    entidad: "Querétaro",
    cargo: "Diseñadora Grafica",
    calle: "Callejón 4",
    int: "4",
    ext: "12",
    colonia: "Constitución",
    ciudad: "Querétaro",
    estado: "Querétaro",
    codigo_postal: "76000",
  },
  {
    id: 22,
    nombre: "Ismael Torres",
    apellidos: "Torres",
    email: "ismael.torres@example.com",
    fecha_de_nacimiento: "1988-10-30",
    telefono: "555-2345",
    curp: "ISTO881030MDFRRZ01",
    imss: "23456789012",
    fecha_ingreso: "2016-07-25",
    fecha_baja: "2023-11-07",
    entidad: "Tamaulipas",
    cargo: "Ingeniero de Sistemas",
    calle: "Calle Hidalgo",
    int: "10",
    ext: "18",
    colonia: "Pueblo Viejo",
    ciudad: "Tampico",
    estado: "Tamaulipas",
    codigo_postal: "89300",
  },
  {
    id: 23,
    nombre: "Rosa Martinez",
    apellidos: "Martinez",
    email: "rosa.martinez@example.com",
    fecha_de_nacimiento: "1991-06-21",
    telefono: "555-3456",
    curp: "ROMA910621MDFRRR02",
    imss: "34567890123",
    fecha_ingreso: "2017-08-30",
    fecha_baja: "2024-02-28",
    entidad: "Nayarit",
    cargo: "Administradora",
    calle: "Calle Ocampo",
    int: "5",
    ext: "8",
    colonia: "Centro",
    ciudad: "Tepic",
    estado: "Nayarit",
    codigo_postal: "63000",
  },
  {
    id: 24,
    nombre: "Martín Castro",
    apellidos: "Castro",
    email: "martin.castro@example.com",
    fecha_de_nacimiento: "1994-03-11",
    telefono: "555-4567",
    curp: "MACA940311HDFTRS07",
    imss: "45678901234",
    fecha_ingreso: "2015-09-14",
    fecha_baja: "2024-05-22",
    entidad: "Baja California",
    cargo: "Jefe de operaciones",
    calle: "Avenida Reforma",
    int: "7",
    ext: "20",
    colonia: "El Sauzal",
    ciudad: "Ensenada",
    estado: "Baja California",
    codigo_postal: "22800",
  },
  {
    id: 25,
    nombre: "Juliana Aguilar",
    apellidos: "Aguilar",
    email: "juliana.aguilar@example.com",
    fecha_de_nacimiento: "1992-04-25",
    telefono: "555-5678",
    curp: "JUAJ920425MDFGLL03",
    imss: "56789012345",
    fecha_ingreso: "2016-02-17",
    fecha_baja: "2023-12-12",
    entidad: "Sinaloa",
    cargo: "Coordinadora",
    calle: "Callejón de la Reforma",
    int: "3",
    ext: "12",
    colonia: "Las Palmas",
    ciudad: "Culiacán",
    estado: "Sinaloa",
    codigo_postal: "80000",
  },
];

const ColaboradorPage = () => {
  const { id } = useParams();
  const numericId = id ? Number(id) : undefined;
  const colaborador = fakePeople.find((person) => person.id === numericId);

  const [monthsToBd, setMonthsToBd] = useState(0);
  const [monthsSinceIngreso, setMonthsSinceIngreso] = useState(0);
  const [numOfNotifications, setNumOfNotifications] = useState(1);

  useEffect(() => {
    if (colaborador) {
      // Calculate the next birthday
      const birthDate = new Date(colaborador.fecha_de_nacimiento);
      const today = new Date();

      // Set the next birthday's year to the current year
      let nextBirthday = new Date(birthDate);
      nextBirthday.setFullYear(today.getFullYear());

      // If the birthday already passed this year, set nextBirthday to next year
      if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
      }

      // Calculate months remaining until next birthday
      const monthsRemaining =
        (nextBirthday.getFullYear() - today.getFullYear()) * 12 +
        nextBirthday.getMonth() -
        today.getMonth();

      setMonthsToBd(monthsRemaining);
      // Calculate months since 'fecha_ingreso'
      const ingresoDate = new Date(colaborador.fecha_ingreso);
      const monthsSinceIngresoVal =
        (today.getFullYear() - ingresoDate.getFullYear()) * 12 +
        today.getMonth() -
        ingresoDate.getMonth();
      setMonthsSinceIngreso(monthsSinceIngresoVal);

      // Set number of notifications to a random number between 0 and 25
      const randomNotifications = Math.floor(Math.random() * 26); // Generates a number between 0 and 25 (inclusive)
      setNumOfNotifications(randomNotifications);
    }
  }, [colaborador]);

  if (!colaborador) {
    return <div>No se encontró el colaborador.</div>;
  }

  return (
    <div className="p-6 mt-4">
      {/* Grid container for the top section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        {/* Image & Full Name Card */}
        <div className="col-span-1 flex flex-col items-center bg-white p-4 shadow-md rounded-lg">
          <img
            src={"/images/userIcon.png"}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-semibold">
            {colaborador.nombre} {colaborador.apellidos}
          </h2>
        </div>
        {/* Progress Cards */}
        <div className="col-span-3 flex  gap-6">
          {/* Months to Birth */}
          <div className="bg-white p-4 shadow-md rounded-lg text-center flex-grow">
            <h3 className="text-lg font-semibold mb-2">
              Meses para cumpleaños
            </h3>
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center">
                <span>{monthsToBd}</span>
              </div>
            </div>
            <h5>Meses</h5>
          </div>

          {/* Time Since Ingreso */}
          <div className="bg-white p-4 shadow-md rounded-lg text-center flex-grow">
            <h3 className="text-lg font-semibold mb-2">Tiempo Desde Ingreso</h3>
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                <span>
                  {monthsSinceIngreso >= 12
                    ? `${Math.floor(monthsSinceIngreso / 12)} `
                    : `${monthsSinceIngreso}`}
                </span>
              </div>
            </div>
            <h5>Años</h5>
          </div>

          {/* Notifications */}
          <div className="bg-white p-4 shadow-md rounded-lg text-center flex-grow">
            <h3 className="text-lg font-semibold mb-2">Notificaciones</h3>
            <div className="flex justify-center items-center">
              <div className="w-16 h-16 rounded-full border-4 border-yellow-500 flex items-center justify-center">
                <span>{numOfNotifications}</span>
              </div>
            </div>
            <h5>Nuevas</h5>
          </div>
        </div>
      </div>

      {/* Grouped Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Group 1 Card */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Información Personal</h3>
          <p>
            <strong>Nombre:</strong> {colaborador.nombre}{" "}
            {colaborador.apellidos}
          </p>
          <p>
            <strong>Email:</strong> {colaborador.email}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong>{" "}
            {colaborador.fecha_de_nacimiento}
          </p>
        </div>

        {/* Group 2 Card */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Datos Laborales</h3>
          <p>
            <strong>RFC:</strong> {colaborador.rfc}
          </p>
          <p>
            <strong>Curp:</strong> {colaborador.curp}
          </p>
          <p>
            <strong>IMSS:</strong> {colaborador.imss}
          </p>
          <p>
            <strong>Fecha Ingreso:</strong> {colaborador.fecha_ingreso}
          </p>
          <p>
            <strong>Fecha Baja:</strong> {colaborador.fecha_baja}
          </p>
          <p>
            <strong>Entidad:</strong> {colaborador.entidad}
          </p>
          <p>
            <strong>Cargo:</strong> {colaborador.cargo}
          </p>
        </div>

        {/* Group 3 Card */}
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Dirección y Contacto</h3>
          <p>
            <strong>Teléfono:</strong> {colaborador.telefono}
          </p>
          <p>
            <strong>Calle:</strong> {colaborador.calle}
          </p>
          <p>
            <strong>Int:</strong> {colaborador.int}
          </p>
          <p>
            <strong>Ext:</strong> {colaborador.ext}
          </p>
          <p>
            <strong>Colonia:</strong> {colaborador.colonia}
          </p>
          <p>
            <strong>Ciudad:</strong> {colaborador.ciudad}
          </p>
          <p>
            <strong>Estado:</strong> {colaborador.estado}
          </p>
          <p>
            <strong>Código Postal:</strong> {colaborador.codigo_postal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColaboradorPage;
