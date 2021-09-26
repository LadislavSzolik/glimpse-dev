import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CreateProperty from './property/create-property'

export default function MyHome() {
  return (
    <div className="min-h-screen bg-white-100">
      <CreateProperty></CreateProperty>
    </div>
  )
}
