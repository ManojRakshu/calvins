import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Multiselect } from "multiselect-react-dropdown";
import axios from "axios";
const Category = [
  "Caterory1",
  "Caterory2",
  "Caterory3",
  "Caterory4",
  "Caterory5",
];
const Areas = ["Area1", "Area2", "Area3", "Area4", "Area5"];
const Shops = ["Shop1", "Shop2", "Shop3", "Shop4"];
const Weight = ["500", "1000", "1500"];
const Pin = ["123456", "654321", "987654"];
const BuyProducts = ["Product1", "Product2", "Product3"];
const AddNew = (props) => {
  const [title, setTitle] = useState();
  const [photos, setPhotos] = useState();
  const [titleDesc, setTitleDesc] = useState();
  const [summary, setSummary] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState([]);
  const [areas, setAreas] = useState([]);
  const [shops, setShops] = useState([]);
  const [weight, setWeight] = useState([]);
  const [egg, setEgg] = useState(false);
  const [eggless, setEggless] = useState(false);
  const [pin, setPin] = useState([]);
  const [buyProducts, setBuyProducts] = useState([]);
  const [priceTaxExcluded, setPriceTaxExcluded] = useState();
  const [priceTaxIncluded, setPriceTaxIncluded] = useState();
  const [taxslab, setTaxslab] = useState();
  const [quantity, setQuantity] = useState();
  const [alertMail, setAlertMail] = useState();
  const [metaTitle, setMetaTitle] = useState();
  const [metaDesc, setMetaDesc] = useState();
  const [metaKeywords, setMetaKeywords] = useState();
  useEffect(() => {
    axios.get("http://localhost:80/newItem").then((res) => {
      console.log(res.data);
    });
  });

  // const addItems = async () => {
  //   const cat = category;
  //   const area = areas;
  //   const shop = shops;
  //   const weigh = weight.map(Number);
  //   const pi = pin.map(Number);
  //   const buyProduct = buyProducts;
  //   const photo = photos;
  //   const uploadData = await axios.post("http://localhost:80/newItem", {
  //     photos: photo,
  //     title: title,
  //     titleDescription: titleDesc,
  //     summary: summary,
  //     description: description,
  //     selectACategory: cat,
  //     areasOfDelivery: area,
  //     selectShops: shop,
  //     selectWeights: weigh,
  //     egg: egg,
  //     eggless: eggless,
  //     serviceablePincode: pi,
  //     suggestiontoBuy: buyProduct,
  //     priceTaxExcluded: priceTaxExcluded,
  //     priceTaxIncluded: priceTaxIncluded,
  //     taxSlab: taxslab,
  //     quantity: quantity,
  //     itemEmptyAlert: alertMail,
  //     seoMetaTitle: metaTitle,
  //     seoMetaDesc: metaDesc,
  //     seoKeywords: metaKeywords,
  //   });
  //   alert(uploadData.data);
  //   window.location.reload(false);
  // };
  const addItems = (e) => {
    const photo = photos;
    const data = new FormData();
    data.append("title", title);
    data.append("photos", photo);

    axios
      .post("http://localhost:80/newItem", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // axios
    //   .post("https://httpbin.org/anything", data)
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  };
  return (
    <div>
      <Container>
        <h4
          className="text-center mb-5 mt-5"
          style={{ borderBottom: "1px solid black" }}
        >
          Add a new Product
        </h4>
        <div style={{ width: "75%", margin: "0 auto" }}>
          <Row className="text-center">
            <Col sm={12} lg={12} md={12}>
              <form action="#">
                <Form.Group>
                  <Form.File
                    label="upload upto 5 images"
                    multiple
                    onChange={(e) => {
                      if (Array.from(e.target.files).length <= 4) {
                        const img = Array.from(e.target.files);
                        setPhotos(img);
                      } else {
                        alert("You can select maximum 5 Images");
                        e.target.value = null;
                      }
                    }}
                    accept=".jpg"
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                  <Form.Label>Title Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Title Description"
                    value={titleDesc}
                    onChange={(e) => setTitleDesc(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Form.Group>
                <Form.Label>Select a category</Form.Label>
                <Multiselect
                  options={Category}
                  isObject={false}
                  onSelect={(a, b) => {
                    setCategory(a);
                  }}
                  onRemove={(a, b) => {
                    setCategory(a);
                  }}
                />
                <Form.Label>Areas of delivery</Form.Label>
                <Multiselect
                  options={Areas}
                  isObject={false}
                  onSelect={(a, b) => {
                    setAreas(a);
                  }}
                  onRemove={(a, b) => {
                    setAreas(a);
                  }}
                />
                <Form.Label>Select Shops</Form.Label>
                <Multiselect
                  options={Shops}
                  isObject={false}
                  onSelect={(a, b) => {
                    setShops(a);
                  }}
                  onRemove={(a, b) => {
                    setShops(a);
                  }}
                />
                <Form.Label>Select Weights(in grams)</Form.Label>
                <Multiselect
                  options={Weight}
                  isObject={false}
                  onSelect={(a, b) => {
                    setWeight(a);
                  }}
                  onRemove={(a, b) => {
                    setWeight(a);
                  }}
                />
                <Form.Label>Egg or Eggless?</Form.Label>
                <br></br>
                <Form.Check
                  inline
                  label="Egg"
                  checked={egg}
                  value="egg"
                  id="Egg"
                  onChange={() => setEgg(!egg)}
                />
                <Form.Check
                  inline
                  label="Eggless"
                  checked={eggless}
                  value="eggless"
                  id="Eggless"
                  onChange={() => setEggless(!eggless)}
                />
                <br></br>
                <Form.Label>Serviceable Pincodes</Form.Label>
                <Multiselect
                  options={Pin}
                  isObject={false}
                  onSelect={(a, b) => {
                    setPin(a);
                  }}
                  onRemove={(a, b) => {
                    setPin(a);
                  }}
                />
                <Form.Label>Customers also buy</Form.Label>
                <Multiselect
                  options={BuyProducts}
                  isObject={false}
                  onSelect={(a, b) => {
                    setBuyProducts(a);
                  }}
                  onRemove={(a, b) => {
                    setBuyProducts(a);
                  }}
                />
                <Form.Group controlId="exampleForm.ControlInput5">
                  <Form.Label>Price(Excluding Tax)</Form.Label>
                  <Form.Control
                    type="text"
                    value={priceTaxExcluded}
                    placeholder="Price(Excluding Tax)"
                    onChange={(e) => setPriceTaxExcluded(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput6">
                  <Form.Label>Price(Including Tax)</Form.Label>
                  <Form.Control
                    type="text"
                    value={priceTaxIncluded}
                    placeholder="Price(Including Tax)"
                    onChange={(e) => setPriceTaxIncluded(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput7">
                  <Form.Label>Tax Slab</Form.Label>
                  <Form.Control
                    type="text"
                    value={taxslab}
                    placeholder="Tax Slab"
                    onChange={(e) => setTaxslab(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput9">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput10">
                  <Form.Label>
                    Alert mail/SMS(When Item is getting empty)
                  </Form.Label>
                  <Form.Control
                    type="number"
                    value={alertMail}
                    placeholder="Alert mail/SMS(When Item is getting empty)"
                    onChange={(e) => setAlertMail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput11">
                  <Form.Label>SEO(Meta Title)</Form.Label>
                  <Form.Control
                    type="text"
                    value={metaTitle}
                    placeholder="SEO(Meta Title)"
                    onChange={(e) => setMetaTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput12">
                  <Form.Label>SEO(Meta Desc)</Form.Label>
                  <Form.Control
                    type="text"
                    value={metaDesc}
                    placeholder="SEO(Meta Desc)"
                    onChange={(e) => setMetaDesc(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput13">
                  <Form.Label>SEO(Keywords)</Form.Label>
                  <Form.Control
                    type="text"
                    value={metaKeywords}
                    placeholder="SEO(Keywords)"
                    onChange={(e) => setMetaKeywords(e.target.value)}
                  />
                </Form.Group>
                <Button variant="outline-primary" onClick={addItems}>
                  Submit
                </Button>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default AddNew;
