// import ServiceItem from './ServiceItem';
// import TestImg from '../../img/img-test.png';
// import familyImg from '../../img/family-service.png';
// import classes from './Services.module.scss';
// import Container from '../../components/UI/Container.js';

const WEDDING_PHTOGRAPHY = [
  {
    id: 1,
    number: '01',
    title: 'Wedding photograhy',
    description: `I've always loved the process of capturing, experiencing, and editing weddings. A milestone for two individuals, gathering families and friends from across the world is always a privilege. The fast-paced nature of the occasion may make the day feel like a blink., which is why gathering those small interactions is what I aim to document.`,
  },
];

const FAMILY_PHOTOGRAPHY = [
  {
    id: 2,
    number: '02',
    title: 'Family photograhy',
    description: `I've always loved the process of capturing, experiencing, and editing weddings. A milestone for two individuals, gathering families and friends from across the world is always a privilege. The fast-paced nature of the occasion may make the day feel like a blink., which is why gathering those small interactions is what I aim to document.`,
  },
];

// const AvailableServices = () => {
//   const serviceList = WEDDING_PHTOGRAPHY.map (service => (
//     <ServiceItem
//       number={service.number}
//       title={service.title}
//       description={service.description}
//     />
//   ));

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

// import {Fragment} from 'react';
// // import ServiceDirectory from '../../components/Services/ServiceDirectory';

// import AvailableServices from './AvailableServices';

// // import classes from './Services.module.scss';

// const Services = () => {
//   return (
//     <Fragment>
//       <div>
//         <AvailableServices />
//       </div>
//     </Fragment>
//   );
// };

// export default Services;

// .section-service {
//   padding: 9.6rem 0;
// }

// // .step-number
// .number {
//   font-size: 9.8rem;
//   font-weight: 600;
//   color: var(--color-primary);
//   margin-bottom: 1.2rem;
// }

// // .step-description
// .description {
//   font-size: 1.8rem;
//   line-height: 1.8;
// }

// .step-img-box {
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transition: 0.5s;
//   &::before {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: 60%;
//     padding-bottom: 60%;
//     background-image: linear-gradient(
//       to right bottom,
//       rgba(152, 236, 104, 0.432),
//       rgba(182, 255, 127, 0.185)
//     );
//     z-index: -2;
//   }
//   &::after {
//     content: "";
//     display: block;
//     border-radius: 50%;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// }

// .step-img {
//   width: 70%;
// }

// .heading-tertiary {
//   font-weight: 700;
//   color: var(--color-primary-dark);

//   letter-spacing: -0.5px;
//   font-size: 3rem;
//   line-height: 1.2;
//   margin-bottom: 3.2rem;
//   text-transform: uppercase;
// }

// @media (max-width: 34em) {
//   .grid {
//     row-gap: 4.8rem;
//   }

//   .step-img-box:nth-child(2) {
//     grid-row: 1;
//   }

//   .step-img-box:nth-child(6) {
//     grid-row: 5;
//   }

//   .step-img-box {
//     transform: translateY(2.4rem);
//   }
// }
