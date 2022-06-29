import {Fragment} from 'react';
// import Services from './Services';
import './services.scss';

// import classes from './Services.module.scss';

const ServiceItem = props => {
  return (
    <Fragment>
      <div key={props.service} id={props.id} className="step-text-box">
        <svg className="service-icon">
          {props.icon}
        </svg>
        <h3 className="heading-tertiary">{props.title}</h3>
        <p className="description">{props.description}</p>
      </div>
    </Fragment>
  );
};

export default ServiceItem;
