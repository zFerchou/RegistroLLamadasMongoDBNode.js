db.registrollamadas.insertOne({
  "numeroRegistro": "NaN1",
  "claveU": "U003",
  "numeroTel": "555-3456",
  "fechaLlamada": new Date("2024-05-15T00:00:00.000Z"),
  "minutosUtilizados": 19,
  "numeroMarcado": "123",
  "claveTipoLlamada": "T003"
});

db.telefonousuarios.insertOne({
  "claveU": "U003",
  "numeroTel": "555-3456"
});

db.tipollamadas.insertOne({
  "claveTipoLlamada": "T003",
  "nombreTipo": "Nacional",
  "costoXMinuto": 0.25
});

db.usuarios.insertOne({
  "claveU": "U003",
  "nombreU": "María",
  "appU": "González",
  "apmU": "Rodríguez",
  "fechaRegistro": new Date("1995-12-10T00:00:00.000Z"),
  "fechaNac": new Date("1980-03-15T00:00:00.000Z")
});

db.registrollamadas.insertOne({
  "numeroRegistro": "NaN2",
  "claveU": "U004",
  "numeroTel": "555-7890",
  "fechaLlamada": new Date("2024-05-16T10:30:00.000Z"),
  "minutosUtilizados": 10,
  "numeroMarcado": "456",
  "claveTipoLlamada": "T001"
});

db.registrollamadas.insertOne({
  "numeroRegistro": "NaN3",
  "claveU": "U005",
  "numeroTel": "555-1234",
  "fechaLlamada": new Date("2024-05-17T15:45:00.000Z"),
  "minutosUtilizados": 5,
  "numeroMarcado": "789",
  "claveTipoLlamada": "T002"
});

db.telefonousuarios.insertOne({
  "claveU": "U004",
  "numeroTel": "555-7890"
});

db.telefonousuarios.insertOne({
  "claveU": "U005",
  "numeroTel": "555-1234"
});

db.tipollamadas.insertOne({
  "claveTipoLlamada": "T001",
  "nombreTipo": "Internacional",
  "costoXMinuto": 1.50
});

db.tipollamadas.insertOne({
  "claveTipoLlamada": "T002",
  "nombreTipo": "Local",
  "costoXMinuto": 0.10
});

db.usuarios.insertOne({
  "claveU": "U004",
  "nombreU": "Juan",
  "appU": "Pérez",
  "apmU": "López",
  "fechaRegistro": new Date("2000-05-20T00:00:00.000Z"),
  "fechaNac": new Date("1985-08-10T00:00:00.000Z")
});

db.usuarios.insertOne({
  "claveU": "U005",
  "nombreU": "Ana",
  "appU": "Martínez",
  "apmU": "Hernández",
  "fechaRegistro": new Date("2010-11-30T00:00:00.000Z"),
  "fechaNac": new Date("1990-01-25T00:00:00.000Z")
});

db.registrollamadas.insertOne({
  "numeroRegistro": "NaN4",
  "claveU": "U006",
  "numeroTel": "555-2345",
  "fechaLlamada": new Date("2024-05-18T08:15:00.000Z"),
  "minutosUtilizados": 30,
  "numeroMarcado": "234",
  "claveTipoLlamada": "T003"
});

db.telefonousuarios.insertOne({
  "claveU": "U006",
  "numeroTel": "555-2345"
});

db.tipollamadas.insertOne({
  "claveTipoLlamada": "T003",
  "nombreTipo": "Nacional",
  "costoXMinuto": 0.25
});

db.usuarios.insertOne({
  "claveU": "U006",
  "nombreU": "Pedro",
  "appU": "García",
  "apmU": "López",
  "fechaRegistro": new Date("1998-08-25T00:00:00.000Z"),
  "fechaNac": new Date("1982-04-05T00:00:00.000Z")
});

db.registrollamadas.insertOne({
  "numeroRegistro": "NaN5",
  "claveU": "U007",
  "numeroTel": "555-6789",
  "fechaLlamada": new Date("2024-05-19T14:00:00.000Z"),
  "minutosUtilizados": 25,
  "numeroMarcado": "345",
  "claveTipoLlamada": "T001"
});

db.telefonousuarios.insertOne({
  "claveU": "U007",
  "numeroTel": "555-6789"
});

db.tipollamadas.insertOne({
  "claveTipoLlamada": "T001",
  "nombreTipo": "Internacional",
  "costoXMinuto": 1.50
});

db.usuarios.insertOne({
  "claveU": "U007",
  "nombreU": "Luis",
  "appU": "Gómez",
  "apmU": "Martínez",
  "fechaRegistro": new Date("2005-03-12T00:00:00.000Z"),
  "fechaNac": new Date("1992-10-20T00:00:00.000Z")
});

db.usuarios.insertOne({
  "claveU": "100",
  "nombreU": "Javier",
  "appU": "Torres",
  "apmU": "Yañez",
  "fechaRegistro": new Date("2024-03-12T00:00:00.000Z"),
  "fechaNac": new Date("1992-10-20T00:00:00.000Z")
});


