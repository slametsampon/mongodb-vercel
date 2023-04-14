import React from 'react';
import { connectToDatabase } from '../../lib/connectToDatabase';

export default async function handler(req, res) {
  try {
    const { mongoClient } = await connectToDatabase();
    const db = mongoClient.db('cmms-pon');
    const collection = db.collection('workorders');
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
