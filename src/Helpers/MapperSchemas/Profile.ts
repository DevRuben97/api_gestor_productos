import Morphism from 'morphism';

import { MovementSchema, MovementDetailsSchema } from '../MapperSchemas/Movement/MovementSchema';
import MovementDto from '../../Models/DTOs/MovementDto';
import MovementDetailsDto from '../../Models/DTOs/MovementDetailsDto';

const mapper = Morphism;

mapper.register(MovementDto, MovementSchema);
mapper.register(MovementDetailsDto, MovementDetailsSchema);



export default mapper;


