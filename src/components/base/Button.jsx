import PropTypes from 'prop-types';
import { Button as AntDButton } from "antd";
import { componentPropTypes } from '../../types/propTypes';

export const Button = ({ 
  size = "middle", 
  variant = "default", 
  color,
  children,
  onClick,
  style = {},
  className = ""
}) => {
  return (
    <AntDButton
      size={size}
      variant={variant}
      color={color}
      onClick={onClick}
      style={{ margin: "0 2px", ...style }}
      className={className}
    >
      {children}
    </AntDButton>
  );
};

Button.propTypes = {
  ...componentPropTypes.base,
  ...componentPropTypes.button
};
