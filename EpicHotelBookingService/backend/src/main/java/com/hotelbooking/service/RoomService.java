package com.hotelbooking.service;

import com.hotelbooking.models.Hotel;
import com.hotelbooking.models.Room;
import com.hotelbooking.repository.HotelRepository;
import com.hotelbooking.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }
    
    public void deleteRoom(Integer id) {
        roomRepository.deleteById(id);
    }

    public void addRoom(Room room) {
        roomRepository.save(room);
    }

    public Optional<Room> getRoomById(Integer id) {
        return roomRepository.findById(id);
    }

    public void updateRoomDetails(Room room, Integer id) {
        Room currentRoom = roomRepository.findById(id).orElseThrow(RuntimeException::new);
        currentRoom.setRoomNumber(room.getRoomNumber());
        currentRoom.setBeds(room.getBeds());
        currentRoom.setPerNightPrice(room.getPerNightPrice());
        currentRoom.setExtraGuestPrice(room.getExtraGuestPrice());
        currentRoom = roomRepository.save(room);
    }

    public List<Room> getAllRooms() {
        return (List<Room>) roomRepository.findAll();
    }
}
