import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, ButtonColor } from "../../../../components/Button/Button";
import { Card } from "../../../../components/Card/Card";
import { Checkbox } from "../../../../components/Checkbox/CheckBox";
import { Input } from "../../../../components/Input/Input";
import { Layout } from "../../../../components/Layout/Layout";
import { Select } from "../../../../components/Select/Select";
import { StorePagesContainer } from "../../../../components/StorePagesContainer/StorePagesContainer";
import styles from "./Add.module.scss";

const AddProduct: NextPage = () => {
  const [collectTaxes, setTollectTaxes] = useState(false);
  const [trackAmounts, setTrackAmounts] = useState(false);
  const [continueSelling, setContinueSelling] = useState(false);
  const [productOptions, setProductOptions] = useState(false);
  const [editor, setEditor] = useState(false);
  const [showPageSearchOptions, setShowPageSearchOptions] = useState(false);
  const [productState, setProductState] = useState("");

  const onClickRedirect = (path: string) => {
    Router.push(path);
  };

  const onClickShowPageOptions = () => {
    setShowPageSearchOptions(true);
  };

  const onChangeProductState = (value: string) => {
    setProductState(value);
  };

  useEffect(() => {
    setEditor(true);
  }, []);

  return (
    <Layout>
      <StorePagesContainer>
        <div>
          <div className={styles.titleContainer}>
            <div>
              <Button
                color={ButtonColor.Grey}
                onClick={() => {
                  onClickRedirect("/shop/products");
                }}
              >
                <span className="material-icons-outlined">west</span>
              </Button>
            </div>
            <h3>Agregar producto</h3>
          </div>
          <div className={styles.pageContainer}>
            <div className={styles.leftContainer}>
              <Card size="info">
                <Input
                  type="text"
                  label="Nombre"
                  value=""
                  onChange={() => {}}
                  placerholder="Camisa de manga corta"
                />
                <h4 className={styles.descriptionTitle}>Descripción</h4>
                <div className={styles.editor}>
                  {editor && (
                    <Editor
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={() => {}}
                    />
                  )}
                </div>
              </Card>
              <Card size="info">
                <h4>Elementos multimedia</h4>
                <div className={styles.mediaContainer}>
                  <div>
                    <span className={styles.addArchives}>Agregar archivos</span>
                    <a className={styles.addFromUrl} href="#">
                      Agregar desde url
                    </a>
                    <p>Acepta imágenes, vídeos o modelos 3D</p>
                  </div>
                </div>
              </Card>
              <Card size="info">
                <h4>Precio</h4>
                <div className={styles.priceInputs}>
                  <Input
                    type="number"
                    label="Precio"
                    value=""
                    onChange={() => {}}
                    placerholder="$ 0,00"
                  />
                  <Input
                    type="number"
                    label="Precio de comparación"
                    value=""
                    onChange={() => {}}
                    placerholder="$ 0,00"
                  />
                  <div className={styles.collectTaxes}>
                    <Checkbox
                      onChange={setTollectTaxes}
                      value={collectTaxes}
                      label="Cobrar impuestos sobre la venta de este producto"
                    />
                  </div>
                  <div className={styles.articlePrice}>
                    <Input
                      type="number"
                      label="Costo por artículo"
                      value=""
                      onChange={() => {}}
                      placerholder="$ 0,00"
                    />
                    <span>Los clientes no verán esta información</span>
                  </div>
                </div>
              </Card>
              <Card size="info">
                <h4>Inventario</h4>
                <div className={styles.inventaryInputs}>
                  <Input
                    type="text"
                    label="SKU (código de artículo)"
                    value=""
                    onChange={() => {}}
                  />
                  <Input
                    type="text"
                    label="Código de barras"
                    value=""
                    onChange={() => {}}
                  />
                </div>
                <div className={styles.inventoryCheckboxes}>
                  <Checkbox
                    onChange={setTrackAmounts}
                    value={trackAmounts}
                    label="Rastrear cantidad"
                  />
                  <Checkbox
                    onChange={setContinueSelling}
                    value={continueSelling}
                    label="Continuar vendiendo cuando esté agotado"
                  />
                </div>
              </Card>
              <Card size="info">
                <h4>Opciones</h4>
                <div className={styles.productOptions}>
                  <Checkbox
                    onChange={setProductOptions}
                    value={productOptions}
                    label="Este producto tiene opciones, como talla y color"
                  />
                </div>
              </Card>
              <Card size="info">
                <div>
                  <div className={styles.publicationTitleSection}>
                    <h4>Publicacion del motor de busqueda</h4>
                    <p>
                      Agrega un título y una descripción para ver cómo podría
                      aparecer este(a) producto en los resultados de los motores
                      de búsqueda.
                    </p>
                    <Button
                      textSize="sm"
                      onClick={onClickShowPageOptions}
                      color={ButtonColor.Primary}
                    >
                      Agregar
                    </Button>
                  </div>
                  {showPageSearchOptions && (
                    <div className={styles.publicationInputsContainer}>
                      <Input
                        type="text"
                        value=""
                        onChange={() => {}}
                        label="Titulo de la pagina"
                      />
                      <Input
                        type="text"
                        value=""
                        onChange={() => {}}
                        label="Identificador de URL"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>
            <div className={styles.rightContainer}>
              <Card size="info">
                <h4>Estado del producto</h4>
                <Select
                  defaultText="Activo"
                  value={productState}
                  onChange={onChangeProductState}
                  options={[
                    { value: "0", text: "Borrar" },
                    { value: "1", text: "Activo" },
                  ]}
                />
              </Card>
              <Card size="info">
                <h4>Organización de productos</h4>
                <div className={styles.productOrganization}>
                  <Input
                    type="text"
                    placerholder="Buscar categoria de producto"
                    value=""
                    onChange={() => {}}
                    label="Categoría de producto"
                  />
                  <Input
                    type="text"
                    placerholder="p. ej. camiseta"
                    value=""
                    onChange={() => {}}
                    label="Tipo de product"
                  />
                  <Input
                    type="text"
                    value=""
                    onChange={() => {}}
                    label="Proveedor"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </StorePagesContainer>
    </Layout>
  );
};

export default AddProduct;
