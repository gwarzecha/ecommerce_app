import styles from './Container.module.scss'


const Container = ({ children, className, ...rest }) => {
  let containerClassName = styles.container;

if ( className ) {
  containerClassName = `${containerClassName} ${className}` // takes in the className prop
}

  return (
    <div className={containerClassName} {...rest}>
      { children }
    </div>
  )
};

export default Container;