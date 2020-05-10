import React, {useState, useEffect} from 'react';
import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CountryPicker from './components/CountryPicker/CountryPicker'
import styles from './App.module.css'
import {fetchData} from './api'
import image from './images/image.png'




function App () {

  // state = {
  //   data: {},
  //   country: ''
  // }
  const [data, setData] = useState({})
  const [country, setCountry] = useState('')

  useEffect(() => {
    const fetchApi = async () => {
      setData(await fetchData())
    }
    fetchApi();

  }, [])

  // async componentDidMount() {
  //   const fetchedData = await fetchData();
  //   this.setState({data: fetchedData})
  // }

  const handleCountryChange = async (country) => {
    const fetchedCountry = await fetchData(country);
    setData(fetchedCountry);
    setCountry(country)
  }
  // handleCountryChange = async (country) => {
  //   const fetchedCountry = await fetchData(country);
  //   this.setState({data: fetchedCountry ,country: country})
  // }

  // render() {
    // const {data, country} = this.state
    return (
      <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19"/>
      <Cards data ={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart  data ={data} country={country}/>
      </div>
    );

  // }
}

export default App;
