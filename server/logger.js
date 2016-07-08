import log from 'winston';
import { Config } from './config';

// set log as cli mode
log.cli();

function logServerConfig(err) {
  if (err) log.error(err);

  const url = ['http://', Config.host, ':', Config.port].join('');

  if(Config.env === 'development') {
  	log.info('==========================================');
  	log.info('Environment:', Config.env);
  	log.info('Listening at:', url);
  	log.info('==========================================');
  } else {
  	log.info('==========================================');
  	log.info('Environment:', Config.env);
  	log.info('Listening at: cputoedu.herokuapp.com');
  	log.info('==========================================');
  }
}

export { log, logServerConfig };
