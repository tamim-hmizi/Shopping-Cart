import { useEffect, useState } from 'react'
import Card from './Card'
import { useOutletContext } from 'react-router-dom'
import '../styles/shop.css'

function Shop() {
    const [data, SetData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const setNbItems = useOutletContext()

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    'https://fakestoreapi.com/products',
                    {
                        mode: 'cors',
                    }
                )
                if (response.status !== 200) throw new Error('Error')
                const data = await response.json()
                SetData(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (error) return <p>A network error was encountered</p>

    if (loading) return <p>Loading...</p>

    return (
        <div className="items-container">
            {data.map((item) => (
                <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    setNbItems={setNbItems}
                />
            ))}
        </div>
    )
}

export default Shop
