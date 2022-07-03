import ServiceItem from './ServiceItem';
import './services.scss';
import WeddingImg from '../../assets/wedding-section.png';
import FamilyImg from '../../assets/FamilySection.png';
// import {
//   ReactComponent as IconSvg,
// } from '../../assets/icons/Wedding-Expanded-Live-Stroke-Individual_Bride-Groom-Celebrate.svg';

const WEDDING_PHOTOGRAPHY = [
  {
    id: 1,
    // icon: <IconSvg height={295} width={245} />,
    title: 'Wedding photograhy',
    description: `I've always loved the process of capturing, experiencing, and editing weddings. A milestone for two individuals, gathering families and friends from across the world is always a privilege. The fast-paced nature of the occasion may make the day feel like a blink., which is why gathering those small interactions is what I aim to document.`,
  },
];

const FAMILY_PHOTOGRAPHY = [
  {
    id: 2,
    // icon: <IconSvg height={295} width={245} />,
    title: 'Family photograhy',
    description: `I've always loved the process of capturing, experiencing, and editing weddings. A milestone for two individuals, gathering families and friends from across the world is always a privilege. The fast-paced nature of the occasion may make the day feel like a blink., which is why gathering those small interactions is what I aim to document.`,
  },
];

const AvailableServices = () => {
  const serviceList = WEDDING_PHOTOGRAPHY.map (service => (
    <ServiceItem
      key={service.id}
      id={service.id}
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  ));

  const serviceListTwo = FAMILY_PHOTOGRAPHY.map (service => (
    <ServiceItem
      key={service.id}
      id={service.id}
      icon={service.icon}
      title={service.title}
      description={service.description}
    />
  ));

  return (
    <section className="section-service">

      <div class="container">
        <span class="subheading">Photography services</span>
        <h2 class="heading-secondary">
          Capturing new beginnings and next chapters
        </h2>
      </div>

      <div className="container grid grid--2-cols ">
        <div key={WEDDING_PHOTOGRAPHY}>

          {serviceList}
        </div>
        <div className="service-img-box">
          <img className="service-img" src={WeddingImg} alt="" />
        </div>
        <div className="service-img-box">
          <h2 className="heading-secondary"> Summer Sessions</h2>
          <img className="service-img" src={FamilyImg} alt="" />
        </div>
        <div key={FAMILY_PHOTOGRAPHY}>
          {serviceListTwo}
        </div>
      </div>

    </section>
  );
};

export default AvailableServices;

//   const serviceListTwo = FAMILY_PHOTOGRAPHY.map (service => (
//     <ServiceItem
//       number={service.number}
//       title={service.title}
//       description={service.description}
//     />
//   ));

//   return (
//     <section className={classes['section-service']}>
//       <Container />
//       <div className="container grid grid--2-cols grid--center-v">
//         <div key={WEDDING_PHTOGRAPHY}>{serviceList}</div>
//         <div className={classes['step-img-box']}>
//           <img className={classes['step-img']} src={TestImg} alt="" />
//         </div>

//         <div className={classes['step-img-box']}>
//           <img className={classes['step-img']} src={familyImg} alt="" />
//         </div>
//         <div key={FAMILY_PHOTOGRAPHY}>{serviceListTwo}</div>

//       </div>

//     </section>
//   );
// };

// export default AvailableServices;

// import {Fragment} from 'react';
// import classes from './Services.module.scss';

// const ServiceItem = props => {
//   return (
//     <Fragment>
//       <div
//         key={props.service}
//         id={props.id}
//         className={classes['step-text-box']}
//       >
//         <p className={classes.number}>{props.number}</p>
//         <h3 className={classes['heading-tertiary']}>{props.title}</h3>
//         <p className={classes.description}>{props.description}</p>
//       </div>
//     </Fragment>
//   );
// };

// export default ServiceItem;
