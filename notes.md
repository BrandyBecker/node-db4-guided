# Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their _name_, _species_, and _all zoos_ in which they have resided. 
(including zoo name and address).

Determine the database tables necessary to track this information.

Label any relationships between table.

For the `zoos` the client wants to record the :
- name
- address

For the `animals` the client wants to record:
- name
- species
- list of all zoos they have resided

Determing the DB tables necessary to track this info.
Label any relationships between table too.

## A good Data Model:
- is easily readable.
- captures ALL information the system needs.
- captures ONLY the information the system needs.
- reflect reality ( from the POV of the system )
- is flexible, can evolce w/ the system.
- guarantess `data integrity`, without sacrificing too much performance.
- is driven by the way we access data.

## Components
- entities (nouns: zoo, animal, species), like a resource ---> tables.
- properties ---> columns or fields.
- relationships ---> Foreign Keys (FK)

## Workflow
- identify entities
- identify the properties
- identify relationships

## Relationships
- one to one (real + transactional) : || example: `a book to its publisher`
- one to many : MOST COMMON RELATIONSHIP THERE IS! || example:  _There are MANY animals in 1 species_ | `an author to many books`
- many to many : there is smoke and mirrors || example: 

_there are many animals in 1 species_

_there can be more than 1 animal in a zoo_

_an animal could have lives in more than 1 zoo_

## Mantras
- every table must have a **Primary Key**
- work on **2 or 3** entities at a time
- **one to many** relationships are modeled using a **Foreign Key**.
- the **Foeign Key** ALWAYS goes in the **many** side! (In this case, `animals` is the many.)
- the **Foreign Key Column** must be the same type as the **Primary Key** it references.
- **Many to Many** require a 3rd table
-------------------------------------------------------------------------------------------------------------------------------

# Data Modeling:

## One to One Relationships: 
- relationship describes an entity(existence) (e.g. a book) relating to exactly one other (e.g. its publisher)

## One to Many Realtionships:
- relationship describes one entity (e.g. an author) relating to many others (e.g. books).

## Many to Many Relationships:
- 

## Multi Table Schemas in Knex:

-------------------------------------------------------------------------------------------------------------------------------
