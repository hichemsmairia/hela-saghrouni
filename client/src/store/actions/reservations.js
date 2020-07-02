import { GET_RESERVATIONS, GET_RESERVATION_SUGGESTED_SEATS } from '../types';
import { setAlert } from './alert';

export const getReservations = () => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/reservations';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const reservations = await response.json();
    if (response.ok) {
      dispatch({ type: GET_RESERVATIONS, payload: reservations });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const getSuggestedReservationSeats = username => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/reservations/usermodeling/' + username;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const reservationSeats = await response.json();
    if (response.ok) {
      dispatch({
        type: GET_RESERVATION_SUGGESTED_SEATS,
        payload: reservationSeats
      });
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const addReservation = reservation => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/reservations';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    });
    if (response.ok) {
      const { reservation, QRCode } = await response.json();
      dispatch(setAlert('Votre Reservation a ete Cree', 'success', 5000));
      return {
        status: 'success',
        message: 'Reservation Created',
        data: { reservation, QRCode }
      };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: 'votre  Reservation n est pas creer .. essayer ulterieurement.'
    };
  }
};

export const updateReservation = (reservation, id) => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/reservations/' + id;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservation)
    });
    if (response.ok) {
      dispatch(setAlert(' la Reservation est mis a jours', 'success', 5000));
      return { status: 'success', message: 'Reservation Updated' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: ' Reservation have not been updated, try again.'
    };
  }
};

export const removeReservation = id => async dispatch => {
  try {
    const token = localStorage.getItem('jwtToken');
    const url = '/reservations/' + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      dispatch(setAlert('la Reservation est supprimer', 'success', 5000));
      return { status: 'success', message: 'Reservation supprimer' };
    }
  } catch (error) {
    dispatch(setAlert(error.message, 'error', 5000));
    return {
      status: 'error',
      message: ' la Reservation n est pas supprimer , essayer ulterieurement '
    };
  }
};
