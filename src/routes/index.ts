import express from 'express';
import { pingHandler } from '../handlers/health/ping';

const api = express();

// Ping test
api.get('/ping', pingHandler);

export default api;
