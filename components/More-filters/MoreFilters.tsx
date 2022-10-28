import { useState } from "react";
import { FilterProps } from "../../types";
import { Button, ButtonColor } from "../Button/Button";
import { Filter } from "../Filter/Filter";
import styles from "./MoreFilters.module.scss";

interface Props {
  filters: FilterProps[];
}

export const MoreFilter = ({ filters }: Props) => {
  const [showFilters, setShowFilter] = useState(false);

  const onClickFilters = () => {
    setShowFilter(!showFilters);
  };

  const filterClass = !showFilters ? styles.hideFilters : " ";

  return (
    <div className={styles.filters}>
      <div className={styles.moreFilters}>
        <Button onClick={onClickFilters} color={ButtonColor.Grey} textSize="sm">
          Mas filtros
        </Button>
      </div>

      <div className={styles.filtersContainer + " " + filterClass}>
        <div>
          {filters.map((filter) => {
            return <Filter type="large" filter={filter} />;
          })}
        </div>

        <div className={styles.filtersButton}>
          <Button
            textSize="sm"
            color={ButtonColor.Primary}
            onClick={onClickFilters}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
};
