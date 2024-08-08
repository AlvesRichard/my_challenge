import axios from "axios";
import { useEffect, useState } from 'react';

let arrayAboutMe = [
  `Soy Leanne Graham, una apasionada profesional de Romaguera-Crona, donde implemento nuestra estrategia de "harness real-time e-markets" para crear redes neuronales cliente-servidor en múltiples capas. Me dedico a transformar la forma en que los mercados electrónicos funcionan, optimizando cada proyecto para alcanzar la máxima eficiencia. Vivo en la tranquila ciudad de Gwenborough y disfruto aplicando mis conocimientos para resolver desafíos complejos, siempre con un enfoque en la innovación y la mejora continua.`,
  `Soy Ervin Howell, y formo parte de Deckow-Crist, una empresa reconocida por su enfoque proactivo en la contingencia didáctica. En mi rol, me dedico a "synergize scalable supply-chains", trabajando para optimizar y escalar nuestras cadenas de suministro de manera eficiente. Resido en la vibrante ciudad de Wisokyburgh, y disfruto aplicando mi experiencia para desarrollar soluciones innovadoras que impulsen el crecimiento y la adaptabilidad en nuestra industria. Estoy comprometido con la excelencia y la mejora continua en cada proyecto que emprendo.`,
  `Hola, soy Clementine Bauch, y trabajo en Romaguera-Jacobson, donde nos destacamos por nuestra interfaz bifurcada cara a cara. Mi enfoque está en "e-enable strategic applications", desarrollando soluciones que faciliten aplicaciones estratégicas en nuestro sector. Vivo en McKenziehaven y me apasiona contribuir al éxito de nuestros proyectos mediante un enfoque innovador y orientado al cliente. Mi compromiso es proporcionar soluciones efectivas y eficientes que impulsen nuestra empresa hacia el futuro.`,
  `Soy Patricia Lebsack en Robel-Corkery, donde lidero iniciativas para mejorar la "multi-tiered zero tolerance productivity". Mi enfoque está en "transitioning cutting-edge web services", asegurando que nuestras soluciones sean siempre innovadoras y de alta calidad. Estoy dedicada a impulsar el éxito mediante la implementación de servicios web avanzados y eficaces. Si buscas transformar tu infraestructura tecnológica, ¡conéctate conmigo!`,
  `Soy Chelsey Dietrich en Keebler LLC, donde nos especializamos en ofrecer soluciones user-centric y fault-tolerant. Mi misión es "revolutionize end-to-end systems" para garantizar que nuestros clientes obtengan sistemas robustos y confiables. Con un enfoque en la innovación y la resiliencia, me dedico a diseñar estrategias que optimicen la experiencia del usuario y transformen la manera en que se gestionan las operaciones. ¡Contáctame para explorar cómo podemos revolucionar tu sistema!`,
  `Soy Mrs. Dennis Schulist en Considine-Lockman, donde nos dedicamos a crear una "synchronised bottom-line interface" para impulsar tu negocio. Mi rol se centra en e-enable innovative applications que transforman procesos y maximizan la eficiencia. Con un compromiso firme hacia la innovación y la integración, trabajo para asegurar que nuestras soluciones no solo cumplan, sino superen tus expectativas. ¡Descubre cómo podemos sincronizar y optimizar tus operaciones para un futuro más ágil y eficaz!`,
  `Soy Kurtis Weissnat en Johns Group, donde nuestro lema es "Configurable multimedia task-force". Nos especializamos en generate enterprise e-tailers, diseñando soluciones adaptables que impulsan el éxito en el comercio electrónico. Con un enfoque en la personalización y la innovación, mi misión es ayudar a las empresas a alcanzar sus objetivos de venta en línea con herramientas multimedia de vanguardia. Visítanos en elvis.io para descubrir cómo podemos transformar tu estrategia de e-commerce y llevar tu negocio al siguiente nivel.`,
  `En Abernathy Group, como parte del equipo, me especializo en e-enable extensible e-tailers. Nuestra misión es transformar la presencia digital de nuestros clientes mediante soluciones innovadoras y conceptos secundarios implementados. Con un enfoque en la optimización de e-commerce, trabajamos para ofrecer estrategias avanzadas que impulsen el crecimiento sostenible en el mundo digital. Explora nuestras soluciones y descubre cómo podemos ayudar a tu negocio a prosperar.`,
  `En Yost and Sons, me dedico a agregar tecnologías en tiempo real para revolucionar la gestión de proyectos. Con el lema "Switchable contextually-based project", nuestra misión es proporcionar soluciones adaptativas y eficientes que se ajusten a las necesidades cambiantes de nuestros clientes. Enfocados en la innovación, trabajamos para implementar proyectos con un enfoque basado en el contexto, optimizando cada fase del proceso. Descubre más sobre nuestras soluciones en conrad.com.`,
  `En Hoeger LLC, me especializo en modelos integrales y empoderadores que optimizan los procesos empresariales. Con el lema "Centralized empowering task-force", nuestro enfoque es ofrecer soluciones completas y eficientes para transformar la forma en que las empresas operan. Estamos comprometidos con la implementación de estrategias innovadoras que mejoren el rendimiento y la coordinación en todos los niveles. Descubre más sobre nuestros servicios en ambrose.net.`,
];

const fetchPosts = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const fetchUsers = async () => {
  try {
    const responseUsers = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // const responsePosts = await axios.get(
    //   "https://jsonplaceholder.typicode.com/posts"
    // );

    const usersWithAdditionalInfo = responseUsers.data.map((user, index) => {
      return {
        ...user,
        photo: require(`../../public/perfiles/${user.id}.jpg`),
        front: require(`../../public/portadas/${user.id}.jpg`),
        aboutMe: arrayAboutMe[index],
       // posts: responsePosts.data.filter((post) => post.userId === user.id),
      };
    });

    const usersWithConnections = usersWithAdditionalInfo.map((user) => {
      return {
        ...user,
        followers: generateConnections(usersWithAdditionalInfo, user.id),
        followed: generateConnections(usersWithAdditionalInfo, user.id),
      };
    });

    return usersWithConnections;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const generateConnections = (users, currentUserId) => {
  let connections = [];
  let potentialConnectionIds = [];
  const numberOfConnections = getRandomNumber(1, 10);
  for (let i = 0; i < numberOfConnections; i++) {
    potentialConnectionIds.push(getRandomNumber(1, numberOfConnections));
  }
  let uniqueConnectionIds = [...new Set(potentialConnectionIds)];

  for (let i = 0; i < uniqueConnectionIds.length; i++) {
    users.forEach((user) => {
      if (
        user.id === uniqueConnectionIds[i] &&
        uniqueConnectionIds[i] !== currentUserId
      )
        connections.push(user);
    });
  }
  return connections;
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports={
  fetchUsers,fetchPosts
}
