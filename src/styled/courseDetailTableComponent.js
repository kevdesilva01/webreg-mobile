import { rgba } from 'polished';
import { ChevronRight } from '@styled-icons/material';

const {
  default: styled,
} = require('styled-components');

export const TableCellContainer = styled.div`
  margin: 6px 16px;
  margin-top: 1px;
  background-color: #FBFBFB;
  box-shadow: 0px 2px 5px ${rgba(0, 0, 0, 0.1)};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  justify-items: center;
  min-height: 26px;
`;

export const TableCellDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  border: 1px solid #034263;
`;

export const TableCellDottedLine = styled.div`
height: ${
  (props) => (props.halfHeight ? '50%;' : '100%;')
}
  -moz-transition: all .2s linear;
  -webkit-transition: all .2s linear;
  transition: all .2s linear;
  width: 0;
  border-right: 2px dashed #034163bb;
  opacity: ${
  (props) => (props.hide ? 0 : 100)
}
`;

export const TableCellDetail = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding: ${
  (props) => (props.smallPadding ? '7px 11px;' : '11px;')
}
`;

// TODO: how to use styled component on icons
// how to use two classes => class1.class2 in styled components

export const NavigationIcon = styled(ChevronRight)`
  color: #BEBEBE;
  width: 27px;
  heightL 27px;
`;

export const ExpandIcon = styled(ChevronRight)`
  color: #BEBEBE;
  width: 27px;
  heightL 27px;
  -moz-transition: all .2s linear !important;
  -webkit-transition: all .2s linear !important;
  transition: all .2s linear !important;
  transform: ${
  (props) => (props.rotate ? 'rotate(90deg);' : 'none;')
}
`;

export const CellHeader = styled.div`
  width: 100%;
  color: #034263;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InstructorName = styled.div`
  font-size: 12px;
  line-height: 14px;
`;

export const SelectionsContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Selection = styled.div`
  width: 36px;
  height: 14px;
  border: 1px solid ${rgba('#034263', 0.6)};
  border-radius: 3px;
  text-align: center;
  display: table-cell;
  overflow: hidden;
  vertical-align:middle;
  font-size: 9px;
  line-height: 14px;
`;

export const CellSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 0.7fr 1fr 0.8fr;
  column-gap: 10px;
  align-items: center;
  justify-items: center;
  font-size: 10px;
  line-height: 12px;

  &>div {
    &:first-child {
      justify-self: start;
    }
    &:last-child {
      justify-self: end;
    }
  }
`;

// TODO: how to go about the alignment??

// display: flex;
// justify-content: space-between;
// align-items: center;
// font-size: 10px;
// line-height: 12px;

export const TableCellDotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
${
  (props) => (props.reverse ? `
    justify-content: flex-start;
    margin-bottom: 8px;
  ` : `
    justify-content: flex-end;
    margin-top: 8px;
  `)
}
  height: 100%;
  position: relative;

`;
